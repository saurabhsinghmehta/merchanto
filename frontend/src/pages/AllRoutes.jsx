import { Route,Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Cart from './Cart'
import Home from './home'
import Payment from './Payment'
import HomedataSinglePage from './HomedataSinglePage'
import MenPage from './MenPage'
import { MobileNumber } from "./mobileNumber";
import { Otp } from "./otp";
import { SignInWithEmail } from "./signInWithEmail";
import { SignUp } from "./signUp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payments from './Payment'
import Final from "./final"

export function AllRoutes()
{
    return (
        <>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<HomedataSinglePage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/mens" element={<MenPage/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin-email" element={<SignInWithEmail/>} />
            <Route path="/mobilenumber" element={<MobileNumber/>} />
            <Route path="/otp" element={<Otp/>} />
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<HomedataSinglePage/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/final" element={<Final/>}/>
            </Routes>
            <ToastContainer theme="colored"/>
        </>
    )

}

export default AllRoutes
