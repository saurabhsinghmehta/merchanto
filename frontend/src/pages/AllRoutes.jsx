import React from "react";
import { Route, Routes } from "react-router-dom";
import { Otp } from "./otp";
import { SignUp } from "./signUp";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Cart";
import Home from "./home";
import HomedataSinglePage from "./HomedataSinglePage";
import MenPage from "./MenPage";
import Checkout from "./Checkout";
import { MobileNumber } from "./mobileNumber";
import AdminDashboard from "../pages/AdminDashboard";
import {SignInWithEmail} from "../pages/signInWithEmail"
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<HomedataSinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens" element={<MenPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin-email" element={<SignInWithEmail />} />
        <Route path="/mobilenumber" element={<MobileNumber />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
