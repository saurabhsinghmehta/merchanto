import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../styles/Payment.css"
const Payments = () => {
   const payment=useSelector((store)=>store.app.payment);
    console.log("payment",payment);

  return (

    <div>
  
  <section className="blurBack"></section>
  <section className="cartSection">
    <div className="cart-left-section">
      <h1>Payment Method</h1>
      <div className="cod-div">
        <div className="cod-left-div">
          <img className="cash-img" src="https://i.postimg.cc/rFFBn0fY/money.png" alt="money"/>
          <p>Cash on Delivery</p>
        </div>
        <img className="tick-img" src="https://i.postimg.cc/tJPNDzLV/check.png" alt="check"/>
      </div>
      <div className="cod-div">
        <div className="cod-left-div">
          <img className="cash-img" src="https://i.postimg.cc/rFFBn0fY/money.png" alt="money"/>
          <p>Net Banking</p>
        </div>
        <img className="tick-img" src="https://i.postimg.cc/tJPNDzLV/check.png" alt="check"/>
      </div>
    </div>
    <div className="cart-right-section">
      <h3>Price Details:</h3>
      <div className="product-charges">
            
                <p>Product Charges:399</p>
          {payment.map((e)=>{
            return (
              <div>
                <p id="product-charges">{e.price}</p>
                </div>
            )
          })}
                
             
         
        
        
      </div>
      <div className="delivery-charges">
        <p>Delivery Charges:</p>
        <p>+ ₹0</p>
      </div>
      <div className="cod-charges">
        <p>COD Charges:</p>
        <p>+ ₹0</p>
      </div>
      <div className="discount-div">
        <p>1st Order Discount:</p>
        <p>- ₹100</p>
      </div>
      <div className="order-total-div">
        <p>Order Total:299</p>
        <p id="order_total"></p>
      </div>
      <div>
        <p className="warning-message">Clicking on Continue will not deduct any money</p>
      </div>
      <a><Link to="/final"><button className="cart-continue-button" id="placeOrder">Place Order</button></Link></a>
    </div>
    </section>

    </div>
  )
}

export default Payments