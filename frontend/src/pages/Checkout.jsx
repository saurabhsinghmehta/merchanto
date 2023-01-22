import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import {Box, Button, Checkbox,SimpleGrid,Image, Heading, Input, Text} from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPaymentData } from '../redux/app/action'
const disImg="https://i.postimg.cc/Kzk9hV5x/discount-3.png";
const Checkout = () => {
  const dispatch=useDispatch();
  const notifySuccess = (res)=>{toast.success(res)};
   
  const checkout=useSelector((store)=>store.app.checkout)
   console.log("checkoutdata",checkout);
   
   
   
   const handlePayment=(payload)=>{
    dispatch(addPaymentData(payload))
    notifySuccess("Item redirected to Payment Page")
    // alert("Item added in Cart")
    console.log("item added in paymen page",payload);
   }
 

  return (

    <>
    <Navbar/>
    <Box pt={["25%","","","13%"]} display={["block","","","flex"]} border="px solid red" w="70%" m="auto">
        <Box color="grey"  border="px solid red" w={["100%","","","50%"]} >
        <Box>
       <Text mt="5px" fontSize="22px" fontWeight="500">Contact information</Text>
       <Text  mt="2%">E-mail</Text>
       <Input borderRadius="15px" mt="5px" type="email" placeholder='e-mail...'></Input>
       <Text mt="5px">Contact Number</Text>
       <Input borderRadius="15px" mt="5px" type="number" placeholder='mobile number...'></Input>
       </Box>
       <Box mt="6%">
       <Text mt="5px" fontSize="22px" fontWeight="500">Shipping Address</Text>
       <Text mt="3%">Full Name</Text>
       <Input borderRadius="15px" mt="5px" placeholder='your name...'></Input>
       <Text mt="5px">Address</Text>
       <Input borderRadius="15px" mt="5px" placeholder='your address...'></Input>
       <Text mt="5px">City</Text>
       <Input borderRadius="15px" mt="5px" placeholder='your city...'></Input>
       <Text mt="5px">Country</Text>
       <Input borderRadius="15px" mt="5px" placeholder='your country...'></Input>
       <Text mt="5px">Postal code</Text>
       <Input borderRadius="15px" mt="5px" type="number" fontSize="6px" placeholder='postal code...'></Input>
       </Box>
       <Checkbox color="grey" mt="7px">save this information for next time</Checkbox>
     
      </Box>
   
      <Box bgColor={["white","","","hsl(0,0%,95%)"]} border="px solid red" w="50%">
       <SimpleGrid >
              {  checkout?.length>0&&
                checkout.map((e)=>{
                  return(
                    <Link to={`/product/${e.id}`}><Box boxShadow='xs' p='6' rounded='md'  border="px solid rgb(153, 153, 153)">
                      <Box display={["block","","","flex"]}>
                      <Box key={e.id} border="px solid blue"  w="100%"> 
                        <Image w="50%" border="px solid blue" src={e.image}/>
                      </Box>
                     <Box border="px solid green" h="50%" w="100%">
                      <Text mt="5px" ml="10px" fontSize="16px" color="rgb(153, 153, 153)">{e.title}</Text>
                     <Box display="flex" alignItems="center">
                      <Text display="inline"  ml="10px" color="black" fontSize="24px" fontWeight="700" >₹{e.price}</Text>
                      <del style={{display:"inline", marginLeft:"5px",  color:"rgb(153, 153, 153)"}}>₹{e.mrp}</del> 
                      <Text ml="5px" fontWeight="700" color="rgb(35,187,117)">{e.discount}% off</Text> 
                      </Box>
                      <Image ml="10px" w="16px" h="16px" display="inline" src={disImg}/>
                      <Text  style={{display:"inline",fontSize:"14px", color:"rgb(102, 102, 102)", marginLeft:"10px"}}>₹ 100 discount on 1st order</Text>
                      <Button  ml="10px" borderRadius="50px" h="22px" w="50%" color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      <Button  _hover={{bgColor:'rgb(35,187,117)'}} ml="10px" mt="10px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">3.6⭐</Button>
                  <Link to="/payment"><Button onClick={()=>handlePayment(e)} mt="7px" borderRadius="30px" ml="5px" color="white" _hover={{bgColor:"rgb(244,51,151)"}} bgColor="rgb(244,51,151)">Continue</Button>
                  </Link>    
                      </Box>
                    </Box>
                    </Box>
                    </Link>
                  )
                })
              }
            </SimpleGrid>
      </Box>
    </Box>
    </>
  )
}

export default Checkout