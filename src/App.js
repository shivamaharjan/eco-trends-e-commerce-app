
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './pages/auth/ForgetPassword';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
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
