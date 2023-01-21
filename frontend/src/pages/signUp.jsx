import "../style/signUp.css"
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { signUp } from "../redux/auth/action";
import {Link, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignUp()
{
    // react hooks-
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userData = useSelector(store=>store.signUpReducer);


    // destructure-
    const {isLoading} = userData


    // notify-
    const notifySuccess = (res)=>{toast.success(res)};
    const notifyError = (err)=>{toast.error(err)};


    // signup function-
    const signUpHandler = ()=> {
        const sendData = {name, email, phone, password};
        dispatch(signUp(sendData))
    }

    
    // handle response and error
    useEffect(()=>{
        if(userData.signUp.error)
        {
            notifyError(userData.signUp.error)
        }
        if(userData.signUp.message)
        {
            notifySuccess(userData.signUp.message)
            notifySuccess("An email has been sent to your email address")
            navigate("/signin-email")
        }
        }, [userData.signUp])


    // return statement-
    return (
        <div id="sign-up">
            <p id="heading">Sign Up</p>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} />
            <input type="tel" maxLength={10} placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" value={isLoading === true ? "...wait" : "Sign up"} id="sign-up-btn" onClick={signUpHandler} />
            <p id="already-account">Have an account already</p>
            <Link id="sign-in-options" to={"/signin-email"}>Sign In with email </Link>
            <p>or</p>
            <Link id="sign-in-options" to={"/mobilenumber"}>Sign In with mobile number </Link>
        </div>
    );
}