import "../style/signUp.css"
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { signUp } from "../redux/auth/action";
import {Link, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userData = useSelector(store=>store.signUpReducer);

    const signUpHandler = ()=> {
        const sendData = {name, email, phone, password};
        dispatch(signUp(sendData))
    }
    if(userData.signUp.message)
        {
            alert(userData.signUp.message)
            navigate("/signin")
        }
    // console.log(userData.signUp);

    return (
        <div id="sign-up">
            <p id="heading">Sign Up</p>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" value={"Sign up"} id="sign-up-btn" onClick={signUpHandler} />
            <p id="already-account">Have an account already <Link to={"/signin"}>Sign In </Link></p>
        </div>
    );
}