import { Link } from "react-router-dom";
import "../style/mobileNumber.css"
import axios from "axios"

export function MobileNumber()
{

    const clickHandler = ()=>{
    }
    

    return (
        <div id="mobile-number">
            <p id="mobile-number-heading">Sign in to view your profile</p>
            <input type="tel" placeholder="Phone Number" />
            <input type="submit" value={"Send OTP"} id="mobile-number-btn" onClick={clickHandler} />
            <p id="or">or</p>
            <Link to={"/signin-email"}>Sign In with email address </Link>
        </div>
    );
}