import React from 'react'
import {Box,Button,Text,Image, Heading} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
import {useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addCartData, getProductData } from '../redux/app/action';
import { getmen } from '../redux/Men/action';

const disImg="https://i.postimg.cc/Kzk9hV5x/discount-3.png";
const SinglePage = () => {
    const{id}=useParams();
  const men = useSelector((store) => store.MenReducer.mens);

    const [currentProduct,setCurrentProduct]=useState({})
    const dispatch=useDispatch();
    const navigate=useNavigate()

   useEffect(()=>{
    
        dispatch(getmen())
    
   },[men.length,dispatch])

   useEffect(()=>{
    if(id){
        const product=men.find((item)=>item.id===Number(id))
        product&&setCurrentProduct(product)
    }
   },[id])
   console.log(currentProduct,"curr")
   const handleCart=(payload)=>{
    dispatch(addCartData(payload))
    alert("Item added in Cart")
    console.log(payload);
   }
  
  return (
    <>
     <Navbar/>
     <Box display={["block","","flex","flex"]} pt="100px" w="75%" m="auto" mt="7%" border="px solid red">
       <Box w="50%" border="px solid red">
          <Image border="px solid red" display="block" m="auto" src={currentProduct?.images} />
        <Box  display={["grid","","","flex"]} gap={["10px","","",""]} w="70%" m="auto" mt="20%" border="px solid red">
       <Button onClick={()=>handleCart(currentProduct)} w={["82%","","","95%"]} fontSize={["20px","","","20px"]} border="1px solid black" _hover={{bgColor:'white'}} bgColor="white" >{`🛒`}Add To Cart</Button> 
        <Button  w={["82%","","","50%"]} fontSize={["20px","","","20px"]}  bgColor="rgb(244,51,151)" color="white" _hover={{bgColor:'rgb(244,51,151)'}}>{`>>`}Buy Now</Button>
        </Box>
        <Box  display={["flex","","","flex"]} gap="10px" justifyContent="center">
        <Image  w={["25%","","","10%"]} m="right" mt="5%" src={currentProduct.image}/>
        <Image w={["25%","","","10%"]} m="right" mt="5%" src={currentProduct.image}/>
        </Box>
       </Box>
       <Box w="50%" border="px solid red">
        <Text mt="5px" ml="10px" fontSize="18px" color="rgb(153, 153, 153)">{currentProduct?.title}</Text>
        <Box display="flex" alignItems="center">
                      <Text ml="10px" color="black" fontSize="27px" fontWeight="700" >₹{currentProduct?.discounted_price}</Text>
                      <del style={{display:"inline", marginLeft:"5px",  color:"rgb(153, 153, 153)"}}>₹{currentProduct?.original_price}</del> 
                      <Text ml="5px" fontWeight="700" color="rgb(35,187,117)">{currentProduct?.discount}% off</Text> 
                      </Box>
                      <Image ml="10px" w="16px" h="16px" display="inline" src={disImg}/>
                      <Text  style={{display:"inline",fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"10px"}}>₹ 100 discount on 1st order</Text>
                      <Text  style={{fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"12px"}}>Favorite</Text>
                      <Button  ml="10px" borderRadius="50px" h="22px" w={["","","","22%"]} color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      <Button  _hover={{bgColor:'rgb(35,187,117)'}} ml="10px" mt="15px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">3.6⭐</Button>

                      <Box mt="8%">
                        <Heading color="black">Product Details</Heading>
                        <Text color="rgb(153, 153, 153)" ml="8px">Item : Good ✔</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Quality : Excellent ⭐</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Multipacks</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Good quality Product made of very fine quality material. This Product is long lasting.</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">Country of Origin : India 🌐</Text>
                        <Text color="rgb(153, 153, 153)" ml="8px">More Information...</Text>
                      </Box>
       </Box>
     </Box>
   </>
    
  )
}

export default SinglePage




