import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from './Cart'
import Home from './home'
import HomedataSinglePage from './HomedataSinglePage'
import MenPage from './MenPage'
import { MobileNumber } from "./mobileNumber";
import { Otp } from "./otp";
import { SignInWithEmail } from "./signInWithEmail";
import { SignUp } from "./signUp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AllRoutes()
{
    return (
        <>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<HomedataSinglePage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/mens" element={<MenPage/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin-email" element={<SignInWithEmail/>} />
            <Route path="/mobilenumber" element={<MobileNumber/>} />
            <Route path="/otp" element={<Otp/>} />
            </Routes>
            <ToastContainer theme="colored"/>
        </>
    )
}

export default AllRoutes
