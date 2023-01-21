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