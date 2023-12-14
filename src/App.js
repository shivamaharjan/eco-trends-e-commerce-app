
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './pages/auth/ForgetPassword';
import Profile from './pages/profile/Profile';
import "./styles.css";
import CategoryLandingPage from './pages/category/CategoryLandingPage';
import { useDispatch } from 'react-redux';
import { getAllProductAction } from './redux/product/productAction';


function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getAllProductAction())

  },[])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category-home" element={<CategoryLandingPage/>}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
