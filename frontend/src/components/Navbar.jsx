import React from 'react'
import {Link} from "react-router-dom"
import '../styles/Navbar.css';
import {SearchIcon} from '@chakra-ui/icons'
import {CgProfile} from 'react-icons/cg';
import {ImMobile} from 'react-icons/im';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Navbar() {
  return (
    <>
     <div className="main_nav">
        <div className="main_nav1">
            <div className="logo">
                <div>
              <Link to="/"><svg className="nav_logo" viewBox="0 0 87 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="156" height="36" iconsize="20" ><path d="M12.844 6.814c1.453.011 2.677.516 3.685 1.507 1.02.998 1.523 2.188 1.512 3.593L18 18.522c-.006.788-.668 1.423-1.488 1.423-.815-.006-1.471-.646-1.465-1.434l.04-6.608a2.048 2.048 0 00-.661-1.57c-.428-.43-.967-.646-1.6-.646a2.227 2.227 0 00-1.664.686c-.416.42-.621.997-.627 1.581l-.035 6.511c-.006.8-.68 1.446-1.506 1.44-.826-.006-1.494-.657-1.488-1.457l.04-6.55a2.21 2.21 0 00-.603-1.56c-.45-.464-1.002-.69-1.658-.696a2.236 2.236 0 00-1.611.629c-.434.425-.668.946-.668 1.558l-.041 6.602c-.006.794-.674 1.434-1.494 1.429-.82-.006-1.477-.652-1.471-1.445l.041-6.58a4.928 4.928 0 011.29-3.32c1.083-1.168 2.419-1.752 3.972-1.74 1.482.01 2.748.526 3.761 1.575 1.043-1.043 2.297-1.542 3.78-1.536zm18.682 7.316l-8.479-.052c.07 1.02.41 1.83 1.008 2.436.603.596 1.377.902 2.32.907.738.006 1.348-.159 1.834-.499.287-.204.598-.504.932-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.369 2.034 7.51 7.51 0 01-.287.318 6.416 6.416 0 01-1.389 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.445-.617-4.594-1.813-1.148-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.143-1.19 2.643-1.78 4.512-1.763 1.886.012 3.375.601 4.459 1.774 1.078 1.162 1.61 2.76 1.6 4.806a.703.703 0 01-.721.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.972-2.306a2.985 2.985 0 00-1.013.153 2.928 2.928 0 00-.867.453c-.258.198-.48.436-.668.714a3.24 3.24 0 00-.428.952l5.947.034zM45.64 14.13l-8.478-.052c.07 1.02.41 1.83 1.007 2.436.604.596 1.377.902 2.32.907.739.006 1.348-.159 1.835-.499.287-.204.597-.504.931-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.37 2.034 7.442 7.442 0 01-.288.318 6.416 6.416 0 01-1.388 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.446-.617-4.594-1.813-1.149-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.142-1.19 2.642-1.78 4.511-1.763 1.887.012 3.375.601 4.46 1.774 1.077 1.162 1.61 2.76 1.599 4.806a.703.703 0 01-.72.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.971-2.306a2.985 2.985 0 00-1.014.153 2.928 2.928 0 00-1.535 1.167 3.24 3.24 0 00-.427.952l5.947.034zM61.976 0c.838.006 1.506.663 1.5 1.474l-.062 6.478c1.084-.93 2.277-1.14 3.578-1.134 1.3.006 2.66.566 3.539 1.501.75.81 1.113 2.103 1.101 3.871l-.047 6.302c-.005.81-.685 1.456-1.523 1.45-.838-.005-1.506-.663-1.5-1.473l.041-6.024c.006-1.014-.176-1.751-.54-2.204-.368-.46-.966-.692-1.792-.692-1.055-.006-1.805.306-2.238.935-.428.64-.645 1.74-.657 3.298l-.035 4.664c-.005.81-.685 1.457-1.523 1.451-.838-.005-1.506-.663-1.5-1.473l.129-16.962c.012-.822.691-1.468 1.53-1.462zM73.44 13.46c.012-1.751.668-3.236 1.975-4.454 1.3-1.219 2.888-1.825 4.746-1.808 1.869.011 3.451.64 4.746 1.887 1.277 1.241 1.91 2.766 1.898 4.562-.012 1.82-.668 3.332-1.974 4.556-1.313 1.213-2.918 1.808-4.81 1.797-1.882-.012-3.446-.646-4.712-1.899-1.254-1.235-1.88-2.782-1.869-4.641zm2.96.068c-.007 1.213.316 2.17.984 2.879.68.72 1.582 1.082 2.707 1.088 1.13.006 2.039-.34 2.718-1.043.68-.703 1.026-1.638 1.037-2.816.006-1.18-.322-2.12-.996-2.828-.68-.714-1.582-1.083-2.707-1.088-1.107-.006-2.004.345-2.695 1.054-.691.708-1.037 1.626-1.049 2.754zm-19.405-.257c.907.664 1.363 1.53 1.38 2.582v.044c0 1.286-.507 2.348-1.453 3.067-.868.66-2.073 1.008-3.476 1.008-1.492 0-3.064-.42-4.427-1.177a1.362 1.362 0 01-.485-1.967 1.443 1.443 0 011.2-.626c.248 0 .49.06.704.18 1.042.577 2.107.882 3.076.882 1.532 0 1.695-.74 1.695-1.062v-.044c0-.648-.884-.953-2.332-1.378-.101-.033-.197-.06-.293-.087-.963-.267-1.965-.589-2.743-1.144-.924-.665-1.374-1.537-1.374-2.67v-.044c0-2.326 1.949-3.955 4.737-3.955 1.172 0 2.45.283 3.617.806.36.164.642.463.766.834a1.36 1.36 0 01-.113 1.106l-.006.005a1.449 1.449 0 01-1.256.714c-.214 0-.417-.043-.608-.13-.907-.41-1.763-.627-2.479-.627-.912 0-1.504.37-1.504.948v.043c0 .67 1.172 1.03 2.411 1.417l.242.076c.952.284 1.938.632 2.721 1.199z" fill="#F43397"></path></svg></Link> 
            </div>
            <div className="nav_input">
            <SearchIcon className='search_icon'/>
               <input className="logo_input" placeholder="Try Saree, Kurti or Search by Product Code " type="text"/>
            </div>
            </div>
            <div className="nav_menu">
            <div className="dropdown">
            {/* <ImMobile className='mobile_icon'/> */}
        <p className="dropbtn">Download App</p>
        <div className="dropdown-content">
            <p>Download From</p>
            <img className="images" src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt=""/>
            
          <img className="images2" src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt=""/>
        </div>
       </div>
       <div className='dropbtn_supp'>Become A Supplier</div>
       {/* <div className='dropbtn'><CgProfile className='profile_icon'/>Profile</div> */}
       <div className="profile_dropdown">
            {/* <ImMobile className='mobile_icon'/> */}
        <p className="nav_profile"><CgProfile className='profile_icon'/>Profile</p>
        <div className="dropdown-content_profile">
            <p className='hello'>Hello User</p>
            <p className='access'>To access your account</p>
            <button className='profile_button'>Sign Up</button>
            <hr className='hr'/>
            <p className='orders'><BsBagCheck className='bag'/>My Orders</p>
        </div>
       </div>
              <div className='dropbtn_cart'><Link to="/cart"><AiOutlineShoppingCart className='cart_icon'/></Link>Cart</div>
            </div>
        </div>
        <div className="main_nav2">
        <div className="bottomNav">
        <div className="nav-menu">
          <ul>
          
            <li className="dropdowns" >Women Western
              <div className="submenu">
                <div className="subCat">
                  <span className="catHeading">Topwear</span>
                  <span>Dresses</span>
                  <span>Tops</span>
                  <span>Sweaters</span>
                  <span>Jumpsuits</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Bottomwear</span>
                  <span>Jeans</span>
                  <span>Jeggings</span>
                  <span>Palazzos</span>
                  <span>Shorts</span>
                  <span>Skirts</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Innerwear</span>
                  <span>Bra</span>
                  <span>Briefs</span>
                  
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Sleepwear</span>
                  <span>Nightsuits</span>
                  <span>Babydolls</span>
                  
                </div>
              </div>
            </li>
            <li className="dropdowns">Jewellery & Accessories
            <div className="submenu">
                <div className="subCat">
                  <span className="catHeading">Jewellery</span>
                  <span>Jewellery Set</span>
                  <span>Earrings</span>
                  <span>Mangalsutras</span>
                  <span>Studs</span>
                  <span>Bangles</span>
                  <span>Necklaces</span>
                  <span>Anklets</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Women Accessory</span>
                  <span>Bags</span>
                  <span>Watches</span>
                  <span>Hair Accessories</span>
                  <span>Sunglasses</span>
                  <span>Socks</span>
                </div>
              </div>
            </li>
            <Link to="/mens"><li className='dropdowns' >Men
            <div className="submenu">
                <div className="subCat">
                  <span className="catHeading">Top Wear</span>
                  <span>All Top Wear</span>
                  <span>Tshirts</span>
                  <span>Shirts</span>
                 
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Bottom Wear</span>
                  <span>Track Pants</span>
                  <span>Jeans</span>
                  <span>Trousers</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Men Accessories</span>
                  <span>All Men Accessories</span>
                  <span>Watches</span>
                  <span>Belts</span>
                  <span>Sunglasses</span>
                  <span>Wallets</span>
                  <span>Jewellery</span>
                  <span>Bags</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Men Footwear</span>
                  <span>Casual Shoes</span>
                  <span>Sports Shoes</span>
                  <span>Sandals</span>
                  <span>Formal Shoes</span>
                  <span>Socks</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Ethnic Wear</span>
                  <span>Man Kurtas</span>
                  <span>Ethnic Jackets</span>
                  
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Inner and Sleep Wear</span>
                  <span>All Inner and Sleep Wear</span>
                  <span>Vests</span>
                </div>
              </div>
            </li></Link>
            <li className='dropdowns'>Beauty & Health
            <div className="submenu">
                <div className="subCat">
                  <span className="catHeading">Makeup</span>
                  <span>Face</span>
                  <span>Eyes</span>
                  <span>Lips</span>
                  <span>Nails</span>
                 
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Wellness</span>
                  <span>Sanitizers</span>
                  <span>Oral Care</span>
                  <span>Feminine Hygeine</span>
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Skincare</span>
                  <span>Deodrants</span>
                  
                </div>
                </div>
            </li>
           
            <li className='dropdowns'>Bags & Footwear
            <div className="submenu">
                <div className="subCat">
                  <span className="catHeading">Women Bags</span>
                  <span>All Women Bags</span>
                  <span>Handbags</span>
                  <span>Clutches</span>
                  <span>Slingbags</span>
 
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Men Bag</span>
                  <span>All Men Bags</span>
                  <span>Wallets</span>
                  
                </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Men Footwear</span>
                  <span>Sports Shoes</span>
                  <span>Casual Shoes</span>
                  <span>Formal Shoes</span>
                  <span>Sandals</span>
                 
             </div>
                <div className="subCat" style={{marginLeft:"1em"}}>
                  <span className="catHeading">Women Footwear</span>
                  <span>Flats</span>
                  <span>Bellies</span>
                  <span>Jutis</span>
                </div>
                </div>
            </li>
            <li className='dropdowns'>Kids
            <div className="submenu">
                <div className="subCat">
                  <span className="catHeading">Boys & Girls 2+ Years</span>
                  <span>Dresses</span>
              </div>
              <div className="subCat">
                  <span className="catHeading">Infant 0-2 Years</span>
                  <span>Rompers</span>
              </div>
              <div className="subCat">
                  <span className="catHeading">Toys and Accessories</span>
                  <span>Soft Toys</span>
                  <span>Footwear</span>
                  <span>Stationary</span>
                  <span>Watches</span>
                  <span>Bags and Bagpacks</span>
              </div>
              <div className="subCat">
                  <span className="catHeading">Baby Care</span>
                  <span>All Baby Care</span>
              </div>
                </div>
            </li>
            <li>Home & Kitchen</li>
            <li>Electronics</li>
            <li className='dropdowns'>Bath & Body</li>
            <li className="dropdowns" >Women Ethnic</li>
          </ul>
        </div>
      </div>

        </div>
    </div>
    </>
  )
}

export default Navbar