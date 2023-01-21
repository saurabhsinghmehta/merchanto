import "./men.Module.css"
import React ,{useEffect} from "react";
import Filter from "../Component/filter";
import { getmen } from "../redux/Men/action";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSearchParams } from "react-router-dom"
import {useLocation} from "react-router-dom"
import { useState } from "react";
import { AiOutlineCaretLeft } from 'react-icons/ai'
import { AiFillCaretRight } from 'react-icons/ai'
import MenCard from "../Component/Mencard";


const Mens = () => {
    const [page,setpage] = useState(1)
  const mens = useSelector((store) => store.MenReducer.mens)
  const dispatch = useDispatch()
  const [searchparams] = useSearchParams()
 const location = useLocation()
  useEffect(() => {
    if (location || mens.length == 0) {
      const getparam = {
        params: {
              category: searchparams.getAll('categori'),
              _limit: 20,
             _page:page
        }
      }
      dispatch(getmen(getparam))
    }
  },[mens.length,dispatch,location.search,page])
  console.log(mens)
    return (
        <> 
            <div>
                <h1>men page</h1>
                <div className="pagination">
                <button className="backbtn" disabled={page==1} onClick={()=>setpage(page-1)}><AiOutlineCaretLeft/> </button>
                <button className="backbtn">{page}</button>
                <button className="backbtn" disabled={page==7} onClick={()=>setpage(page+1)}><AiFillCaretRight/></button>
                </div>
                </div>
    <div className="menpage">
          <div className="menfilter">
          <Filter /> 
     </div>
     
      <div className="boximg">
        {mens.length > 0 && mens.map((item) => {
         return <MenCard menId={item.id} menimg={item.images[0]} menname={item.title} menoprice={item.original_price} mendprice={item.discounted_price} menrating={item.rating} />
        })}
        
        </div>
       
            </div>
            </>
  );
};


export default Mens;