import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CategoryLandingPage from "./pages/category/CategoryLandingPage";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import { getAllProductAction } from "./redux/product/productAction";
import "./styles.css";
import EditProfile from "./components/profile/EditProfile";
import ChangePassword from "./components/profile/ChangePassword";
import PrivateRoute from "./components/priavteRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category-home" element={<CategoryLandingPage />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="/product/:slug" element={<Product />}></Route>
        <Route path="/edit-profile" element={<EditProfile/>}></Route>
        <Route path="/change-password" element={<ChangePassword/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
