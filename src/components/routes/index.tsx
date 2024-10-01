import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/main";
import SignUp from "../../pages/auth/signup";
import SignIn from "../../pages/auth/signin";
import Coalition from "src/pages/home/coalition";
import Product from "src/pages/home/productList";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/coalition" element={<Coalition />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
