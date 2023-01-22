import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmail } from "../redux/auth/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/signIn.css";
import Navbar from "../components/Navbar";

export function SignInWithEmail()
{
    // react hooks-
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((store)=>store.signUpReducer);


    // notify-
    const notifySuccess = (res)=>{toast.success(res)};
    const notifyError = (err)=>{toast.error(err)};


    // destructure-
    const {emailResponse, isLoading} = data


    // sign in function-
    const emailSignInHandler = ()=> {
        const sendData = {email, password}
        dispatch(signInWithEmail(sendData))
    }


    // handle response and error
    useEffect(()=>{
        if(emailResponse.error)
        {
            notifyError(emailResponse.error);
        }
        else if(emailResponse.message)
        {
            localStorage.setItem("token", (emailResponse.token));
            localStorage.setItem("name", (emailResponse.name));
            notifySuccess(emailResponse.message);
            navigate("/");
        }
        }, [emailResponse])

        
    // return statement-
    return (
        <>
        <Navbar/>
            <div id="sign-in-r">
                <p id="heading-r">Sign In to view your profile</p>
                <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value={isLoading === true ? "...wait" : "Sign in"} id="sign-in-r-btn" onClick={emailSignInHandler} />
                <div id="sign-in-r-bottom">
                    <p id="or">or</p>
                    <Link to={"/mobilenumber"}>Sign In with mobile number </Link>
                </div>
            </div>
        </>
    );
}