import { AlertDialog,
  AlertDialogBody,
   AlertDialogContent,
    AlertDialogFooter,
     AlertDialogHeader,
      AlertDialogOverlay,
       Box, 
       Button,
       Image,
        Center,
         Table,
          TableCaption,
           TableContainer,
            Tbody,
             Td, Tfoot,
              Th, Thead,
               Tr, useDisclosure
              } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addCheckoutData, deleteCartData, getCartData, getMenProductData} from '../redux/app/action';
import Navbar from '../components/Navbar'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const product=useSelector((store)=>store.app.cart);
  console.log("cart product",product);
  const dispatch=useDispatch();
  const {isOpen,onClose}=useDisclosure();
  const cancelRef=useRef();

  const handleCheckout=(payload)=>{
    dispatch(addCheckoutData(payload))
    console.log(payload);
   }

  useEffect(()=>{
    dispatch(getCartData());
  },[product.length,dispatch])
  console.log(product);
  const notifySuccess = (res)=>{toast.success(res)};
  const handleDelete=(id)=>{
   dispatch(deleteCartData(id))
   dispatch(getCartData())
   notifySuccess("Item deleted from Cart")
   console.log("item deleted",id);
  }
  
  return (
    <>
    <Navbar/>
  
    <Box pt="8%">
   <Box ml="32px" pt="50px"><label style={{fontSize:"20px",color:"grey",fontWeight:"500"}}>Cart | </label><label style={{fontSize:"20px"}}>{product.length} Item</label> </Box> 
   <Box ml="32px" pt="50px"><label style={{fontSize:"20px",color:"grey",fontWeight:"500"}}>Final Price | </label><label style={{fontSize:"20px"}}> ₹{Math.round(product.reduce((a,c)=>a+c.price,0))}</label> </Box> 

      <TableContainer mt={{base:20,sm:"20",md:"28",lg:"32"}}>
         <Table
         variant="simple"
         colorScheme="gray"
         size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}
         >
          <TableCaption>No Exchange | No Refund</TableCaption>
         <Thead>
          <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Product</Th>
            <Th fontSize={{base:"xs",md:"md"}}>Price (INR)</Th>
            <Th fontSize={{base:"xs",md:"md"}}>Remove From Cart</Th>
          </Tr>
         </Thead>
         <Tbody>
          {product.map((cartItem)=>(
            <Tr key={cartItem.id}>
               <Image borderRadius='10px' bgColor="white" w="50%" h="50%" src={cartItem.image} />
              <Td fontSize={{base:"xs",md:"md"}}>{cartItem.title}</Td>
              <Td fontSize={{base:"xs",md:"md"}}>{cartItem.price?cartItem.price:cartItem.discounted_price}</Td>
              <Td fontSize={{base:"xs",md:"md"}}>
                <Button onClick={()=>handleDelete(cartItem.id)}>Remove From Cart</Button>
               <Link to="/checkout"><Button onClick={()=>handleCheckout(cartItem)} ml="10px">Buy Now</Button></Link> 
              </Td>
            </Tr>
          ))} 
         </Tbody>
         <Tfoot>
          <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Final Price</Th>
            <Th fontSize={{base:"xs",md:"md"}}>
              {Math.round(product.reduce((a,c)=>a+c.price,0))}
            </Th>
          </Tr>
         </Tfoot>
         </Table>
      </TableContainer>
      <Center mt={{base:4,md:8}}>
      <Link to="/checkout">  <Button variant="outline" colorScheme="gray" onClick={isOpen}>
          Place Order
        </Button></Link>
          <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Place Order
                </AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to place this order ?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red"  ml={3}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>


      </Center>
    </Box>
    </>
  )
        }


export default Cart