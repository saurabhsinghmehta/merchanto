import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from './Cart';
import Home from './Home';
import HomedataSinglePage from './HomedataSinglePage'
import MenPage from './MenPage';
import Checkout from './Checkout';
const AllRoutes = () => {
  return (
    <>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<HomedataSinglePage/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/mens" element={<MenPage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
</Routes>
    </>
  )
}

export default AllRoutes