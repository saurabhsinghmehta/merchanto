
import React from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getshoe } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";


const SingleShoe = () => {
  const { id } = useParams()
  const shoes = useSelector((store) => store.AppReducer.shoes)
  const dispatch = useDispatch()
  const [currentshoe, setcurrenshoe] = useState({})
  
  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getshoe())
    }
  }, [shoes.length,dispatch])
  
  useEffect(() => {
    if (id) {
      const shoe = shoes.find((item) => item.id === Number(id))
      shoe && setcurrenshoe(shoe)
    }
  },[id])
  return (
    <div>
      <h1>Single Shoe Page</h1>
      
      <ShoeCard shoeId={currentshoe.id} shoeimg={currentshoe.image} shoename={currentshoe.name} shoecat={currentshoe.category}/>
    </div>
  );
};

export default SingleShoe;