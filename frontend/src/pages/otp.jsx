import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/mobileNumber.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Otp()
{
    // react hooks-
    const [verifyOtp, setVerifyOtp] = useState(JSON.parse(sessionStorage.getItem("otp")) || "")
    const navigate = useNavigate()
    

    // notify-
    const notifySuccess = (res)=>{toast.success(res)};
    const notifyError = (err)=>{toast.error(err)};


    // private routing-
    useEffect(()=>{
        if(!sessionStorage.getItem("otp"))
        {
            navigate("/mobilenumber")
        }
    }, [sessionStorage.getItem("otp"), verifyOtp])


    // otp verify function-
    const verifyOtpHandler = ()=>{
        if(sessionStorage.getItem("otp"))
        {
            const otpNumber = JSON.parse(sessionStorage.getItem("otp"));
            if(otpNumber === +verifyOtp)
            {
                notifySuccess("Successfully loged in")
                sessionStorage.clear()
                navigate("/")
            }
            else
            {
                notifyError("Please fill valid OTP")
            }
        }
    }


    // return statement- 
    return (
        <div id="mobile-number">
            <p id="mobile-number-heading">Enter OTP sent to {sessionStorage.getItem("phone") || "number"}</p>
            <input id="otp-input" maxlength="6" size="6" type="tel" placeholder="OTP" value={verifyOtp} onChange={(e)=>setVerifyOtp(e.target.value)} />
            <input type="submit" value={"Submit"} id="mobile-number-btn" onClick={verifyOtpHandler} />
            <p id="or">or</p>
            <Link to={"/signin"}>Sign In with email address </Link>
        </div>
    );
}