import { useState } from "react";
import { ProductProps } from "src/type/product.types";
import Cookies from "js-cookie";
import axios from "axios";
import CONFIG from "src/config/config.json";

const UseMyProduct = () => {
  const [myproduct, setMyProduct] = useState<ProductProps[]>([]);
  const page = 1;
  const size = 999;
  const Token = Cookies.get("accessToken");

  const MyProduct = async () => {
    try {
      const res = await axios.get(`${CONFIG.serverUrl}/product/list`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        params: {
          page: page,
          size: size,
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
