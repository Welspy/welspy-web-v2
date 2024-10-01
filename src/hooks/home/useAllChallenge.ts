import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import { useState } from "react";
import { AllChallengeProps } from "src/type/challenge.types";
import { pick } from "lodash";
import { ProductProps } from "src/type/product.types";

const UseAllChallenge = () => {
  const [challenge, setChallenge] = useState<AllChallengeProps[]>([]);
  const [productData, setProductData] = useState<ProductProps>();

  console.log("data", productData);

  const AllChallenge = async () => {
    try {
      const token = Cookies.get("accessToken");
      console.log("AccessToken:", token);

      const page = 1;
      const size = 10;

      const res = await axios.get(`${CONFIG.serverUrl}/room/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        params: {
          page,
          size,
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        setChallenge(res.data.data);

        await axios
          .get(`${CONFIG.serverUrl}/product?idx=${pick(challenge, ["productId"])}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setProductData(res.data.data);
          });
      }
    } catch (error: any) {
      if (error instanceof Response) {
        if (error.status === 409) {
          alert("이미 가입된 방입니다");
        } else {
          console.error(`HTTP error: ${error.status}`);
        }
      } else {
        console.error(`General error: ${error.message}`);
      }
    }
  };

  return {
    AllChallenge,
    challenge,
  };
};

export default UseAllChallenge;
