import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import SignUp from "../../pages/auth/signup";
import SignIn from "../../pages/auth/signin";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
