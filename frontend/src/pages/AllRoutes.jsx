import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import HomedataSinglePage from './HomedataSinglePage'
const AllRoutes = () => {
  return (
    <>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<HomedataSinglePage/>}/>
</Routes>
    </>
  )
}

export default AllRoutes