import { Box, Button, Heading,Image ,SimpleGrid,Text} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import products from '../utils/Homedata'
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { getProductData } from '../redux/app/action';
import { useEffect } from 'react';

const Home = () => {
  const product=useSelector((state)=>state.product);
  const dispatch=useDispatch();
  console.log(product);
  
  useEffect(()=>{
    dispatch(getProductData)
  },[])
  return (
    <>
    <Navbar/>

    <Box  w="78%" border="px solid red" m="auto" mt="5%"> 
         {/*first album  */}
    <Box w={["100%","100%","100%"]} border="px solid blue" display={["block","flex","flex"]} bgColor="rgb(249,249,249)">
        <Box w={["100%","50%","50%"]}>
           <Heading mt={["10px","15px","30px"]} ml={["20px","20px","20px"]} fontSize={["25px","30px","40px"]} color="rgb(51,51,51)">Lowest Prices</Heading>
            <Heading ml={["20px","20px","20px"]} fontSize={["25px","30px","40px"]}  color="rgb(51,51,51)">Best Quality Shopping</Heading> 
            <Box ml={["20px","20px","20px"]} mt={["20px","20px","30px"]} borderRadius="4px" fontSize={["20px","20px","25px"]} width="90%" bgColor=" white" display="flex">
            Free Delievery | Cash On Delievery | Easy Returns
            </Box>
            <Button  _hover={{bgColor:'rgb(244,51,151)'}} w={["60%","80%","88%","50%"]} ml={["20px","20px","20px"]}  mt={["10px","10px","40px"]} color="white" fontSize={["13px","11px","20px"]} bgColor="rgb(244,51,151) " >Download The Meesho App</Button> 
          </Box>
        <Box mt={["20px","0px","0px"]}  w={["99","50%","50%"]} border="px solid red">
            <Image border="px solid red" h={["200px","340px","400px"]} w={["100%","100%","100%"]} src="https://images.meesho.com/images/marketing/1631722939962.webp"/>
        </Box>

    </Box>
    {/* --------------------------- */}
    <Heading mt="50px" color="rgb(51,51,51)" textAlign="center">Top Categories to choose from</Heading>
    <Box  m="auto" display='flex' gap="20px" justifyContent='center' alignItems="center">
     <Image borderRadius="5px"  w={["100%","100%","100%"]}  marginTop="5%" src="https://images.meesho.com/images/marketing/1631612018143.png"/>
      <Box mt="15%" color="white" position='absolute'  display="flex">
        <Box mt={["6%","0%","0%","0%"]}  ml={["12%","12%","11%","0%"]} >
          <Image h={["80%","87%","90%","93%"]} src="https://images.meesho.com/images/marketing/1649760442043.webp"/>
        </Box>
        <Box mr={["3%","9%","","0%"]} mt={["7%","5%","7%","10.3%"]}>
        <Image src="https://images.meesho.com/images/marketing/1649760423313.webp"/>
        </Box>
        <Box mr={["11%","12%","","0%"]} ml={["0px","0px","0px","15px"]} mt={["7%","5%","7%","10.3%"]}>
        <Image src="https://images.meesho.com/images/marketing/1649759799809.webp"/>
        </Box>
      </Box>
      </Box>
      {/* ------------------------------------- */}
      <Box margin="auto" display='flex'justifyContent="right" alignItems="center">
     <Image borderRadius="5px"  w={["100%","100%","100%"]}  marginTop="5%" src="https://images.meesho.com/images/marketing/1629883965347.png"/>
      <Box mt="8%" color="white" position='absolute' display="flex" gap="10px">
        <Box ml={["20%","13%","","0%"]}>
        <Heading display={["block","block","block","block"]} fontSize={["15px","20px","30px","60px"]} color="hsl(167,89%,24%)">Essentials</Heading>
        <br/>
        <Button h={["16%","16%","16%"]} display={["block","block","block","block"]} fontSize={["10px","13px","18px","24px"]} _hover={{bgColor:'hsl(0,0%,13%)'}}  color="white" bgColor="hsl(0,0%,13%)">View All</Button>
        </Box>
        <Box mt={["7%","0%","0%"]}  ml={["0%","0%","9%"]} >
          <Image src="https://images.meesho.com/images/marketing/1649760808952.webp"/>
          <Button display={["none","none","none","block"]} ml={["0%","0%","30%"]} fontSize={["8px","14px","18px"]} color="hsl(167,89%,24%)">Beauty</Button>
        </Box>
        <Box mr={["0%","0%","0%"]} mt={["7%","0%","0%"]}>
        <Image src="https://images.meesho.com/images/marketing/1649760703179.webp"/>
        <Button display={["none","none","none","block"]} ml={["0%","0%","30%"]} fontSize={["8px","14px","18px"]}  color="hsl(167,89%,24%)">Home</Button>
        </Box>
        <Box mr={["11%","0%","0%"]} ml={["0%","0%","0%"]} mt={["7%","0%","0%"]}>
        <Image src="https://images.meesho.com/images/marketing/1649760786763.webp"/>
        <Button  display={["none","none","none","block"]} ml={["0%","0%","17%"]} fontSize={["4px","14px","18px"]} color="hsl(167,89%,24%)">Electronics</Button>
        </Box>
      </Box>
      </Box>
      {/* -------------------------------------------- */}
      <Box  m="auto" display='flex' justifyContent='right' alignItems="center" mt="50px">
     <Image borderRadius="5px" mb="30px" w="100%" src="https://images.meesho.com/images/pow/downloadBannerDesktop.webp"/>
      <Box ml="20%" mb="13%" color="white" position='absolute'>
        <Heading textAlign="right" color="hsl(222,92%,65%)" fontSize={['10px','16px',"25px",'35px']}>Become a Reseller and</Heading>
        <Heading textAlign="right" color="rgb(244,51,151)" fontSize={["16px","26px","30px",'50px']}>Start your Online Business <br/>with Zero Investment</Heading>
       <Box display="flex" w={["25%","25%","25%","25%"]} ml={["40%","40%","40%","40%"]} >
        <Image  borderRadius="8px" src="https://images.meesho.com/images/pow/playstoreIcon.webp"/>
        <Image ml="20px" borderRadius="8px" src="https://images.meesho.com/images/pow/appstoreIcon.webp"/>
        </Box>
       
      </Box>
      </Box>
      {/* ----------------------------------- */}
      <Box  display='flex' justifyContent='left' alignItems="center" mt="23px">
     <Image borderRadius="5px" mb={["","","","22px"]} w="100%" src="https://images.meesho.com/images/pow/supplyBannerDesktop.webp"/>
      <Box ml="5%" mb="0%" color="white" position='absolute'>
        <Heading textAlign="left" color="white" fontSize={['15px','19px',"25px",'35px']}>Register as a Meesho Supplier</Heading>
        <Text  lineHeight={["10px","20px","20px",'50px']} textAlign="left" color="white" fontSize={["10px","20px","20px",'18px']}>Sell your products to crores of customers at 0% commission</Text>
      <Box display={["none","none","none","flex"]}  mt={["","1%","","5%"]} >
      <Box border="px solid red">
      <Image float="left" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg=="/>
      <span >Grow Your Buisness 10X|</span>
      </Box>
      <Box border="px solid red">
      <Image float="left" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg=="/>
      <span >Enjoy 100% Profit|</span>
      </Box>
      <Box border="px solid red">
      <Image float="left" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg=="/>
      <span>See All Over India</span>
      </Box>
      </Box>
      <Button  h={["27px","20px","20px","30px"]} w={["40%","24%","20%","25%"]} mt={["","","","2%"]} color="rgb(244,51,151)">Sign up now</Button>
      </Box>
     
      </Box>
      {/* ----------------------------------------- */}
    </Box>
    {/* ---------------data--------------------- */}
    <Box w="100%" display="flex" border="px solid red" gap="20px">
      <Box w="24%" border="1px solid blue">jskdfkfldlskb</Box>
      <Box w="100%" border="px solid blue">
            <SimpleGrid columns={[1,2,3,4]} spacing="10px" >
              {  product?.length>0&&
                product.map((e)=>{
                  return(
                    <Link to={`/product/${e.id}`}><Box boxShadow='xs' p='6' rounded='md'  border="px solid rgb(153, 153, 153)">
                      <Box key={e.id} border="px solid blue" h="400px" w="100%"> 
                        <Image w="100%" src={e.images[0]}/>
                      </Box>
                     <Box border="px solid green" h="50%" w="100%">
                      <Text mt="5px" ml="10px" fontSize="16px" color="rgb(153, 153, 153)">{e.title}</Text>
                      <Text ml="10px" color="black" fontSize="24px" fontWeight="700" >₹{e.original_price}</Text>
                      <Button ml="10px" borderRadius="50px" h="22px" w="50%" color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      <Button ml="10px" mt="10px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">3.6⭐</Button>
                      </Box>
                    </Box>
                    </Link>
                  )
                })
              }
            </SimpleGrid>
      </Box>
    </Box>
    {/* --------------------------------------- */}
    </>
  )
}

export default Home