import React from "react";
import { Link } from "react-router-dom"
import "./footer.Module.css"

//Get the Men card data from props
const MenCard = ({ menId , menimg, menname ,menrating,mendprice } ) => {
  return (
      <>
          <div className="cardsh">
      <div>
     
        <div className="menimg">
        <Link to={`/women/${menId}`}>
            <img className="menimgsrc" src={menimg} alt="" />
            </Link>
          </div>
          
      <div>
                      <div className="menname">{menname}</div>
                      <div > <span className="menprice">₹{mendprice}</span> <span className="menon">onwards</span>  </div>
                      <p className="menfree">FREE DELIVERY</p>
                      <div className="menrating">{menrating} &#9733; </div>
      </div>
              </div>
              </div>   
    </>
       
  );
};

export default MenCard;