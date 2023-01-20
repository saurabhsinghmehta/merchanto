import {Routes, Route} from "react-router-dom";
import { MobileNumber } from "../pages/mobileNumber";
import { SignInWithEmail } from "../pages/signInWithEmail";
import { SignUp } from "../pages/signUp";

export function AllRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<h1>HELoo Home Page</h1>}></Route>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin-email" element={<SignInWithEmail/>} />
            <Route path="/mobilenumber" element={<MobileNumber/>} />
        </Routes>
    )
}