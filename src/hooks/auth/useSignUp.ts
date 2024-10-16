import axios from "axios";
import { sign } from "crypto";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CONFIG from "src/config/config.json";

interface SignUp {
  email: string;
  name: string;
  phoneNumber: string;
  password: string;
  imageUrl: string;
}

const UseSignUp = () => {
  const [signup, setSignUp] = useState<SignUp>({ email: "", name: "", phoneNumber: "", password: "", imageUrl: "" });
  const navigator = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const SignUpButton = async () => {
    await axios
      .post(`${CONFIG.serverUrl}/auth/sign-up`, {
        email: signup.email,
        name: signup.name,
        phoneNumber: signup.phoneNumber,
        imageUrl: signup.imageUrl,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("회원가입 성공");
          navigator("/sign-up");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return {
    setSignUp,
    SignUpButton,
    signup,
  };
};

export default UseSignUp;
