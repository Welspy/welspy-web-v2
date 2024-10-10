import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/home";
import SignUp from "../../pages/auth/signup";
import SignIn from "../../pages/auth/signin";
import Product from "../../pages/product";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/product" element={<Product/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
