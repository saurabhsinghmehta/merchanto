import { Box, Button, Heading,Image,Checkbox ,SimpleGrid,Text,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import "../styles/Home.css"
import {Link,useLocation,useSearchParams} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { getProductData } from '../redux/app/action';
import { useEffect } from 'react';
import { useState } from 'react';
const disImg="https://i.postimg.cc/Kzk9hV5x/discount-3.png";
const Home = () => {
  const [page,setPage]=useState(1)
  const location=useLocation()
  const product=useSelector((state)=>state.app.product);
  
  const dispatch=useDispatch();
  const [searchParams,setSearchParams]=useSearchParams();
  const initialSort=searchParams.getAll('sort');
  const [sort,setSortBy]=useState(initialSort[0] || "");

  const handleSort=(e)=>{
    setSortBy(e.target.value);
  }
useEffect(()=>{
  let params={};
  sort&&(params.sort=sort)
  setSearchParams(params)
},[setSearchParams,sort])

useEffect(()=>{
  
  if(location||product.length===0){
    const sortBy=searchParams.get("sort")
    const getProductParams={
      params:{
          _sort:sortBy&&"price",
          _order:sortBy,
           limit:16,
          _page:page

      }
      
    }
    dispatch(getProductData(getProductParams))
  }
},[location.search,setSearchParams,sort,page])
  
  return (
    <>
    <Navbar/>

    <Box zIndex="0" pt="130px"  w="78%" border="px solid red" m="auto" mt="5%"> 
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
        <Box mt={["20px","0px","0px"]}  w={["100%","50%","50%"]} border="px solid red">
            <Image border="px solid red" w={["100%","100%","100%","100%"]} src="https://images.meesho.com/images/marketing/1631722939962.webp"/>
        </Box>

    </Box>
    {/* --------------------------- */}
    <div class="topCategoriesHeading">
            <span class="horizontalLine"></span>
            <h1>Top Categories to choose from</h1>
            <span class="horizontalLine"></span>
        </div>

    {/* <Heading mt="50px" color="rgb(51,51,51)" textAlign="center">Top Categories to choose from</Heading> */}
    <Box  m="auto" display='flex' gap="20px" justifyContent='center' alignItems="center">
     <Image borderRadius="5px"  w={["100%","100%","100%"]}  marginTop="5%" src="https://images.meesho.com/images/marketing/1631612018143.png"/>
      <Box mt="15%" color="white" position='absolute'  display="flex">
        <Box mt={["6%","0%","0%","0%"]}  ml={["12%","12%","11%","0%"]} >
          <Image h={["80%","87%","90%","93%"]} src="https://images.meesho.com/images/marketing/1649760442043.webp"/>
        </Box>
        <Box mr={["3%","9%","","0%"]} mt={["7%","5%","7%","10.3%"]}>
       <Link to="/mens"><Image src="https://images.meesho.com/images/marketing/1649760423313.webp"/></Link> 
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
    <Box w="100%" display={["block","block","flex","flex"]} border="px solid red" gap={["20px","20px","20px","20px"]} >
      <Box w={["","","","24%"]} boxShadow='xs' p='6' rounded='md'  border="px solid blue">
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"rgb(153, 153, 153)",fontSize:"17px"}}>Sort By :</label> <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Relevance</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox onChange={handleSort} value="asc" name="sortBy"defaultChecked={sort==="asc"} colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox onChange={handleSort} value="desc" name="sortBy"defaultChecked={sort==="desc"} colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  <Box ml="6%">
  <Text fontSize="20px" fontWeight="500">FILTERS </Text>
  <label style={{color:"rgb(153, 153, 153)"}}>1000+ Products</label>
  </Box>
  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Category</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Accupressure Rollers
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
  Accupressure support
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Analog Watches
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Anklets & Toe Rings
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Gender</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Male
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Female
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Boys
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Girls
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Fabric</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Acrylic
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Art Silk
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Bamboo
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
     Banarasi Silk
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Color</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
    Black
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
  Blue
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
     White
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Red
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Meesho Mall</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Mall Brands
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Shop Brands
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
   Products Brand
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
    Dub Brand
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Occassion</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
   Festive
  </Checkbox>
  
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Discount</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      10% and above
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      20% and above
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      40% and above
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>




  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Rating</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      2.0 and above
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      3.0 and above
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      4.0 and above
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
    M-Trusted
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Combo</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Combos
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
   Multipack
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Pack of 1
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Pack of 8
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>




  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Reversible</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
    No
  </Checkbox>
  
    </AccordionPanel>
  </AccordionItem>
  </Accordion>




  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Material</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
     Acrylic
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
     Alloy
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Brass
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
   Canvas
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Bottom Style</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Border</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Surface Styling</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Back Type</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>




  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Brand</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>



  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Compatible Brands</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Inner Fabric</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Fit/ Shape</label>
        </Box>
        <AccordionIcon /> 
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Loom Type</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>


  <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <label style={{color:"black",fontWeight:"500",fontSize:"20px"}}>Top Type</label>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (High To Low)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Price (Low To High)
  </Checkbox>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      New Arrivals
  </Checkbox><br/>
  <Checkbox colorScheme='green' color="rgb(153, 153, 153)">
      Discount
  </Checkbox>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>







      </Box>
      
      
      {/* --------------------------------------------------- */}
      <Box w="100%" border="px solid blue">
            <SimpleGrid columns={[1,2,3,4]} spacing="10px" >
              {  product?.length>0&&
                product.map((e)=>{
                  return(
                    <Link to={`/product/${e.id}`}><Box boxShadow='xs' p='6' rounded='md'  border="px solid rgb(153, 153, 153)">
                      <Box key={e.id} border="px solid blue"  w="100%"> 
                        <Image border="px solid blue" src={e.image}/>
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
                      </Box>
                    </Box>
                    </Link>
                  )
                })
              }
            </SimpleGrid>
      </Box>
      
    </Box>
    <Box display="flex" w={["","","","20%"]} m={["auto","auto","auto","auto"]} pt="5%">
      <Button color="rgb(244,51,151)" disabled={page==1} onClick={()=>setPage(page-1)}>Previous</Button>
        <Button ml="5%"  _hover={{bgColor:'rgb(244,51,151)'}}  bgColor="rgb(244,51,151)"  color="white">{page}</Button>
        <Button ml="5%" color="rgb(244,51,151)" disabled={page==10}  onClick={()=>setPage(page+1)}>Next</Button>
      </Box>
    {/* --------------------------------------- */}
    </>
  )
}

export default Home