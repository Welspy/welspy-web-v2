import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ProductRegistrationProps } from "src/type/productRegistration";
import CONFIG from "src/config/config.json";
import { ProductProps } from "src/type/product.types";

// 상수 정의
const MAX_IMAGE_SIZE_MB = 1; // 최대 이미지 크기 (MB)
const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024; // 최대 이미지 크기 (바이트)

const useProductRegistration = () => {
  const [products, setProducts] = useState<ProductRegistrationProps>({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    imageUrl: "",
  });

  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [discountedPrice, setDiscountedPrice] = useState<number>(0); // 할인된 가격 상태 추가
  const [product, setProduct] = useState<ProductProps>();

  // 할인된 가격 계산
  useEffect(() => {
    const { price, discount } = products;
    if (price > 0) {
      // 할인된 가격 계산 (소수점 제외)
      const calculatedDiscountedPrice = Math.floor(price - (price * discount) / 100);
      setDiscountedPrice(calculatedDiscountedPrice); // 할인된 가격 업데이트
    } else {
      setDiscountedPrice(0); // 가격 리셋
    }
  }, [products.price, products.discount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const numericValue = name === "price" || name === "discount" ? Number(value) : value;

    // 할인율이 0 이상으로 제한
    if (name === "discount" && Number(numericValue) < 0) {
      setMessage("할인율은 0 이상이어야 합니다.");
      return;
    }

    setProducts((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const validateProductData = () => {
    const { name, description, price, discount } = products;
    if (!name || !description || price <= 0) {
      setMessage("모든 필드를 올바르게 입력해 주세요.");
      return false;
    }
    if (discount < 0 || discount > 100) {
      setMessage("할인율은 0에서 100 사이의 값이어야 합니다.");
      return false;
    }
    if (price - (price * discount) / 100 < 0) {
      setMessage("할인된 가격이 0보다 작을 수 없습니다.");
      return false;
    }
    return true;
  };

  const isImageFileValid = (file: File | null) => {
    if (!file) return false;
    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setMessage(`이미지 크기는 ${MAX_IMAGE_SIZE_MB}MB 이하로 선택해 주세요.`);
      return false;
    }
    return true;
  };

  const uploadImage = (imageFile: File) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const token = Cookies.get("accessToken");
    return axios.post(`${CONFIG.serverUrl}/s3`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const registerProduct = (imageFile: File | null) => {
    // 입력값 유효성 검사
    if (!products.name || !products.description || products.price <= 0 || !imageFile) {
      setMessage("모든 필드를 올바르게 입력해 주세요.");
      return;
    }

    if (!isImageFileValid(imageFile) || !validateProductData()) return;

    const token = Cookies.get("accessToken");

    uploadImage(imageFile)
        .then((imageResponse) => {
          const imageUrl = imageResponse?.data?.data;
          console.log("Received imageUrl:", imageUrl);

          // imageUrl이 존재하는지 확인
          if (!imageUrl) {
            throw new Error("이미지 업로드에 실패했습니다.");
          }

          // blob: 제거
          const cleanedImageUrl = imageUrl.replace(/^blob:/, "");

          const productData = { ...products, imageUrl: cleanedImageUrl };
          console.log("Product data before sending:", productData); // productData 로그 출력

          return axios.post(`${CONFIG.serverUrl}/product`, productData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then((response) => {
          setStatus(response.status);
          setMessage(response.data.message);

          // 제품 등록 후 상태를 초기화하지 않음
          if (response.status === 201) {
            // 필요한 경우 추가 처리
          }
        })
        .catch((error) => {
          handleError(error);
        });
  };


  const resetProductForm = () => {
    setProducts({
      name: "",
      description: "",
      price: 0,
      discount: 0,
      imageUrl: "",
    });
    setDiscountedPrice(0); // 할인된 가격 리셋
  };

  const deleteImage = (imageUrl: string) => {
    if (!imageUrl) {
      setMessage("삭제할 이미지 URL이 필요합니다.");
      return;
    }

    const cleanedImageUrl = imageUrl.replace(/^blob:/, "");

    const token = Cookies.get("accessToken");

    axios
      .delete(`${CONFIG.serverUrl}/s3`, {
        params: { imageUrl: cleanedImageUrl },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setStatus(response.status);
        setMessage(response.data.message);
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const Token = Cookies.get("accessToken");

  const getProduct = async () => {
   
    try {
      await axios
        .get(`${CONFIG.serverUrl}/product/list`, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params: {
            page: 1,
            size: 999,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setProduct(res.data);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      setStatus(error.response?.status || 500);
      setMessage(error.response?.data?.message || "오류가 발생했습니다.");
      console.error("Error details:", error.response?.data);
    } else {
      setStatus(500);
      setMessage("알 수 없는 오류가 발생했습니다.");
      console.error("Unexpected error:", error);
    }
  };

  return {
    products,
    handleChange,
    registerProduct,
    deleteImage,
    discountedPrice, // 할인된 가격 상태 반환
    status,
    message,
    getProduct,
    product,
  };
};

export default useProductRegistration;
