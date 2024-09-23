import axios from "axios";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CONFIG from "../../config/config.json";

interface SignIn {
  email: string | undefined;
  password: string | undefined;
}

const UseSignIn = () => {
  const [signin, setSignIn] = useState<SignIn>({ email: "", password: "" });
  const navigator = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignIn((prev) => ({ ...prev, [name]: value }));
  };

  const SignInButton = async () => {
    try {
      const res = await axios.post(`${CONFIG.serverUrl}/auth/sign-in`, {
        email: signin.email,
        password: signin.password,
      });
      if (res.status === 200) {
        console.log("로그인 성공");
        navigator("/home");
      }
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
