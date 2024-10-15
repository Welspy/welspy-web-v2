import axios from "axios";
import { useState } from "react";
import { AllChallengeProps, MyChallengeProps } from "src/type/challenge.types";
import { ProductProps } from "src/type/product.types";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";

interface Props {
  RoomData: AllChallengeProps | undefined;
}

const UseProduct = ({ RoomData }: Props) => {
  const [product, setProduct] = useState<ProductProps>();
  const idx = RoomData?.productId;
  const Token = Cookies.get("accessToken");

  const Product = async () => {
    try {
      const res = await axios.get(`${CONFIG.serverUrl}/product?idx=${idx}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (res.status === 200) {

        setProduct(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    product,
    Product,
  };
};

export default UseProduct;