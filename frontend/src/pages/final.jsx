import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/final.css"
const Final = () => {
  return (
    <div>
    <section class="blurBack"></section>
      <div class="app_promo-container">
        <div class="left-section">
            <br/>
            <br/>
            <p>Order Placed Successfully</p>
            <br/>
          <h1>Thankyou For Your Purchase</h1>
          <button>
            <img
              src="https://icon-library.com/images/what-is-the-white-shopping-bag-icon/what-is-the-white-shopping-bag-icon-1.jpg"
              alt="image"
            />
            <Link to="/"><p>Continue Shopping</p></Link>
          </button>
        </div>
        <div class="right-section">
          <img
            src="https://static.meeshosupply.com/supplier-new/meesho_static_images/homepage-banner-image_vs.jpg"
            alt="image"/>
        </div>
      </div>
    {/* </section> */}
    </div>
  )
}

export default Final