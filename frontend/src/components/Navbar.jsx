import {useState,useEffect} from 'react'
import {Button,Box,Image} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import axios from "axios";
import '../styles/Navbar.css';
import {SearchIcon} from '@chakra-ui/icons'
import {CgProfile} from 'react-icons/cg';
import {ImMobile} from 'react-icons/im';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import logo from '../logo/merchanto.jpg';
function Navbar() {
  const product = useSelector((store) => store.app.product)
  console.log(product,"storeon nav")
  const [value,setValue]=useState('')
  const [data,setData]=useState([])
  const [cartData,setCartData]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/cart').then((res)=>setCartData(res.data))
    axios.get('http://localhost:8080/menproduct').then((res)=>setData(res.data))
  },[])

  let lengthofcart=cartData.length;

  console.log(lengthofcart);

  const onChange=(e)=>{
    setValue(e.target.value)
  }
  const onSearch=(searchTerm)=>{
    setValue(searchTerm)
    console.log(searchTerm);
  }
  return (
    <>
     <div className="main_nav">
        <div className="main_nav1">
            <div className="logo">
                <div className='logo_navbar_div'>
              <Link to="/">
                <img id="logo_navbar" style={{width:"156",viewBox:"0 0 87 20",  iconsize:"20" }} src={logo}/>
                {/* <svg className="nav_logo" viewBox="0 0 87 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="156" height="36" iconsize="20" ><path d={logo}></path></svg> */}
                </Link> 
            </div>
            <div className="nav_input">
            <SearchIcon className='search_icon'/>
               <input value={value} onChange={onChange} className="logo_input" placeholder="Search" type="text"/>
               <Button display="none" onClick={()=>onSearch(value)}></Button>
               <Box>
            {product.filter(item=>{
              const searchTerm=value.toLowerCase();
              const fullname=item.title.toLowerCase();
              return searchTerm && fullname.startsWith(searchTerm) &&
              fullname!==searchTerm
            }).slice(0,5)
            .map((item)=>(
              (
               <Link to={`/product/${item.id}`}><Box  
                onClick={()=>onSearch(item.title)} 
                bgColor="grey"
                className='dropdown-row' 
                cursor='pointer'
                textAlign='start'
                margin="2px 0"
                key={item.price}>
                  {item.title}
                 <Box display='flex'
                 justifyContent="space-between">
                  <Image bgColor="grey" width="10%" src={item.image}/>
                 </Box>
                </Box>
                </Link> 
                )
            ))}
          </Box>
    {/*------------------------------------- ----------------------------- */}
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
            {/* <p className='hello'>Hello User</p> */}
            <p className='access'>To access your account</p>
            <Link to={"/signup"}><button className='profile_button'>Sign in</button></Link>
            {/* <button className='profile_button'>Sign as Admin</button> */}
            <hr className='hr'/>
            {/* <p className='orders'><BsBagCheck className='bag'/>My Orders</p> */}
        </div>
       </div>
              <div className='dropbtn_cart'><Link to="/cart"><AiOutlineShoppingCart className='cart_icon'/></Link><label >Cart{lengthofcart}</label></div>
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