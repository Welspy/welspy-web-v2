import axios from "axios";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CONFIG from "../../config/config.json";
import Cookies from "js-cookie";

interface SignIn {
  email: string;
  password: string;
}

const UseSignIn = () => {
  const [signin, setSignIn] = useState<SignIn>({ email: "", password: "" });
  const navigator = useNavigate();

  const axiosInstance = axios.create({
    baseURL: CONFIG.serverUrl,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignIn((prev) => ({ ...prev, [name]: value }));
  };

  const SignInButton = async () => {
    try {
      await axiosInstance
          .post(
              `${CONFIG.serverUrl}/auth/sign-in`,
              {
                email: signin.email,
                password: signin.password,
              },
              {
                headers: {
                  "Content-Type": `application/json`,
                },
              }
          )
          .then((res) => {
            alert("로그인 성공");
            navigator("/home");
            console.log(res.data);
            Cookies.set("accessToken", res.data.data.accessToken);
          });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    handleInputChange,
    SignInButton,
    signin,
  };
};

export default UseSignIn;