import { Link } from "react-router-dom";
import "../style/signIn.css"

export function SignIn()
{
    

    return (
        <div id="sign-in">
            <p id="heading">Sign In to view your profile</p>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="submit" value={"Sign in"} id="sign-in-btn" />
            <p id="or">or</p>
            <Link to={"/mobilenumber"}>Sign In with mobile number </Link>
        </div>
    );
}