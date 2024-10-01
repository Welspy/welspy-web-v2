import { ProductProps } from "src/type/product.types";
import Cookies from "js-cookie";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { useState, useEffect } from "react";

interface Props {
  productid: number[];
}

const UseHomeProduct = ({ productid }: Props) => {
  const [homeproduct, setHomeProduct] = useState<ProductProps | undefined>();
  const [id, setId] = useState<number | undefined>(undefined);
  const Token = Cookies.get("accessToken");

  // productid가 변경될 때마다 id를 설정
  useEffect(() => {
    if (productid.length > 0) {
      setId(productid[0]); // 첫 번째 productid만 사용
    }
  }, [productid]);

  // id가 설정될 때만 API 호출
  useEffect(() => {
    const HomeProduct = async () => {
      if (id !== undefined) {
        try {
          const res = await axios.get(`${CONFIG.serverUrl}/product?idx=${id}`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          });
          if (res.status === 200) {
            console.log("homeproduct", res.data.data);
            setHomeProduct(res.data.data);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    // HomeProduct 함수 호출
    HomeProduct();
  }, [id, Token]); // id와 Token이 변경될 때만 호출

  return {
    homeproduct,
  };
};

export default UseHomeProduct;
