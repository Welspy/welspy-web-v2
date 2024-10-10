import { useState } from "react";
import { MyChallengeProps } from "src/type/challenge.types";
import { ProductProps } from "src/type/product.types";
import Cookies from "js-cookie";
import axios from "axios";
import CONFIG from "src/config/config.json";


interface Props {
  MyRoomData: MyChallengeProps | undefined;
}

const UseMyProduct = ({ MyRoomData }: Props) => {
  const [myproduct, setMyProduct] = useState<ProductProps>();
  const idx = MyRoomData?.roomId;
  const Token = Cookies.get("accessToken");
  

  const MyProduct = async () => {
    try {
      const res = await axios.get(`${CONFIG.serverUrl}/product?idx=${idx}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (res.status === 200) {
        setMyProduct(res.data.data);

      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    myproduct,
    MyProduct,
  };
};

export default UseMyProduct;
