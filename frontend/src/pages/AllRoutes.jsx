<<<<<<< HEAD
import {Routes, Route} from "react-router-dom";
import { MobileNumber } from "./pages/mobileNumber";
import { Otp } from "./pages/otp";
import { SignInWithEmail } from "./pages/signInWithEmail";
import { SignUp } from "./pages/signUp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AllRoutes()
{
    return (
        <>
            <Routes>
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/signin-email" element={<SignInWithEmail/>} />
                <Route path="/mobilenumber" element={<MobileNumber/>} />
                <Route path="/otp" element={<Otp/>} />
            </Routes>
            <ToastContainer theme="colored"/>
        </>
    )
}
=======
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from './Cart'
import Home from './home'
import HomedataSinglePage from './HomedataSinglePage'
import MenPage from './MenPage'
const AllRoutes = () => {
  return (
    <>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<HomedataSinglePage/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/mens" element={<MenPage/>}/>
</Routes>
    </>
  )
}

export default AllRoutes
>>>>>>> abbcff72531fc1135fb86774c09a68e3de08fbf2
