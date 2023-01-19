import {Routes, Route} from "react-router-dom";
import { MobileNumber } from "../pages/mobileNumber";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";

export function AllRoutes()
{
    return (
        <Routes>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/mobilenumber" element={<MobileNumber/>} />
        </Routes>
    )
}