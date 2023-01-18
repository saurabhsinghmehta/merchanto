import React from 'react'
import {Box,Text,Image} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductData } from '../redux/app/action';
const HomedataSinglePage = () => {
    const{id}=useParams();
    const products=useSelector((store)=>store.product);
    const [currentProduct,setCurrentProduct]=useState({})
    const dispatch=useDispatch();
    
   useEffect(()=>{
    if(products.length===0){
        dispatch(getProductData())
    }
   },[products.length,dispatch])

   useEffect(()=>{
    if(id){
        const product=products.find((item)=>item.id===Number(id))
        product&&setCurrentProduct(product)
    }
   })
  return (
    <>
     {/* <Navbar/> */}
     <Box>
        <Image src={currentProduct.images}/>
        <Text>{currentProduct.title}</Text>
        <Text>₹{currentProduct.original_price}</Text>
     </Box>
   </>
    
  )
}

export default HomedataSinglePage