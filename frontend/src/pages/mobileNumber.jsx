import { Link, useNavigate } from "react-router-dom";
import "../style/mobileNumber.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signInWithMobileNumber } from "../redux/auth/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function MobileNumber()
{
    // react hooks-
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const otp = useSelector(store=>store.signUpReducer);


    // destructure-
    const {isLoading, otpResponse} = otp 


    // notify-
    const notifySuccess = (res)=>{toast.success(res)};
    const notifyError = (err)=>{toast.error(err)};


    // send otp function-
    const clickHandler = ()=>{
        const sendData = {phone}
        dispatch(signInWithMobileNumber(sendData))
    }

    
    // handle response and error
    useEffect(()=>{
        if(otpResponse.error)
        {
            notifyError(otpResponse.error)
        }
        if(otpResponse.OTP)
        {
            notifySuccess(`Your OTP is ${otpResponse.OTP}`)
            sessionStorage.setItem("otp", (otpResponse.OTP))
            sessionStorage.setItem("phone", (phone))
            localStorage.setItem("token", (otpResponse.token))
            navigate("/otp")
        }
        }, [otpResponse])
    

    // return statement-
    return (
        <div id="mobile-number-r">
            <p id="mobile-number-r-heading">Sign in to view your profile</p>
            <input id="mobile-number-r-input" maxLength={"10"} type="tel" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <input type="submit" value={isLoading === true ? "...wait" : "Sign up"} id="mobile-number-r-btn" onClick={clickHandler} />
            <div id="mobile-number-r-bottom">
                <p id="or">or</p>
                <Link to={"/signin-email"}>Sign In with email address </Link>
            </div>
        </div>
    );
}