import {Input, Box, Button, Heading,Image,Checkbox ,SimpleGrid,Text,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import {Link,useLocation,useSearchParams} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { getMenProductData } from '../redux/app/action';
import { useEffect } from 'react';
import { useState } from 'react';

const disImg="https://i.postimg.cc/Kzk9hV5x/discount-3.png";
const MenPage = () => {
  const location=useLocation()
  const product=useSelector((state)=>state.app.product);
  console.log(product);
  const dispatch=useDispatch();
  const [page,setPage]=useState(1)
  const [searchParams,setSearchParams]=useSearchParams();
  const initialSort=searchParams.getAll('sort');
  const initialCategory=searchParams.getAll("category");
  const [category,setCategory]=useState(initialCategory||[])
  const [sort,setSortBy]=useState(initialSort[0] || "");
   console.log(location);
   const handleFilterCheckbox=(e)=>{
    const newCategories=[...category]
    if(newCategories.includes(e.target.value)){
      newCategories.splice(newCategories.indexOf(e.target.value),1)
    }else{
      newCategories.push(e.target.value)
    }
    setCategory(newCategories)
   }
  const handleSort=(e)=>{
    setSortBy(e.target.value);
  }
useEffect(()=>{
  let params={};
  params.category=category;
  sort&&(params.sort=sort)
  setSearchParams(params)
},[category,setSearchParams,sort])

useEffect(()=>{
  
  if(location||product.length===0){
    const sortBy=searchParams.get("sort")
    const getProductParams={
      params:{
           category:searchParams.getAll("category"),
          _sort:sortBy&&"price",
          _order:sortBy,
          limit:16,
          _page:page
           

      }
      
    }
    console.log(getProductParams)
    dispatch(getMenProductData(getProductParams))
  }
},[location.search,setSearchParams,sort,page])
  
  return (
    <>
    <Navbar/>
    
    {/* ---------------data--------------------- */}
    <Box pt="15%" w="100%" display={["block","block","flex","flex"]} border="px solid red" gap={["20px","20px","20px","20px"]} >
      
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
    <Checkbox checked={category.includes("Handrares")} value="Handrares" onChange={handleFilterCheckbox} colorScheme='green' color="rgb(153, 153, 153)">
    Handrares
  </Checkbox>
  <Checkbox checked={category.includes("Astonishing")} value="Astonishing" onChange={handleFilterCheckbox}  colorScheme='green' color="rgb(153, 153, 153)">
  Astonishing
  </Checkbox>
  <Checkbox checked={category.includes("BreadWhite")} value="BreadWhite" onChange={handleFilterCheckbox}  colorScheme='green' color="rgb(153, 153, 153)">
  BreadWhite
  </Checkbox><br/>
  <Checkbox checked={category.includes("Emulsion")} value="Emulsion" onChange={handleFilterCheckbox}  colorScheme='green' color="rgb(153, 153, 153)">
  Emulsion
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
                      <Text  style={{display:"inline",fontSize:"14px", color:" color: rgb(102, 102, 102);", marginLeft:"10px"}}>₹ 100 discount on 1st order</Text>
                      <Button  ml="10px" borderRadius="50px" h="22px" w="50%" color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      <Button  _hover={{bgColor:'rgb(35,187,117)'}} ml="10px" mt="10px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">{e.rating}⭐</Button>
                      </Box>
                    </Box>
                    </Link>
                  )
                })
              }
            </SimpleGrid>
      </Box>
      </Box>
      <Box display="flex" w={["","","","20%"]} m={["auto","auto","auto","auto"]} >
      <Button color="rgb(244,51,151)" disabled={page==1} onClick={()=>setPage(page-1)}>Previous</Button>
        <Button ml="5%"  _hover={{bgColor:'rgb(244,51,151)'}}  bgColor="rgb(244,51,151)"  color="white">{page}</Button>
        <Button ml="5%" color="rgb(244,51,151)" disabled={page==10}  onClick={()=>setPage(page+1)}>Next</Button>
      </Box>
    </>
  )
}

export default MenPage