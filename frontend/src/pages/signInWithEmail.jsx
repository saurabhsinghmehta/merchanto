import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmail } from "../redux/auth/action";
import "../style/signIn.css"

export function SignInWithEmail()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((store)=>store.signUpReducer);
    const {emailResponse} = data

    const emailSignInHandler = ()=> {
        const sendData = {email, password}
        dispatch(signInWithEmail(sendData))
    }

    // handle response and error
    useEffect(()=>{
    if(emailResponse.error)
        {
            return alert(emailResponse.error)
        }
    if(emailResponse.message)
        {
            alert(emailResponse.message)
            localStorage.setItem("token", (emailResponse.token))
            navigate("/")
            return
        }
    }, [emailResponse])
    console.log(emailResponse);

    return (
        <div id="sign-in">
            <p id="heading">Sign In to view your profile</p>
            <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" value={"Sign in"} id="sign-in-btn" onClick={emailSignInHandler} />
            <p id="or">or</p>
            <Link to={"/mobilenumber"}>Sign In with mobile number </Link>
        </div>
    );
}