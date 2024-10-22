import axios from "axios";
import { useState } from "react";
import { ProductProps } from "src/type/product.types";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";

const UseProduct = (idx: number) => {
  const [product, setProduct] = useState<ProductProps>();

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
