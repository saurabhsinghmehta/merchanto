import "./footer.Module.css"


import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';


const Footer = ()=> {
  return (
      <div>
    <div className="container">
      <div className="box1">
        <div>
          <h1><b className="sme">Shop Non-Stop on Meesho</b></h1>
        </div>
        <div>
          <p className="footer_text_clr">
            Trusted by more than 1 Crore Indians <br /> Cash on Delivery | Free
            Delivery
          </p>
        </div>
        <div className="box1_img">
          <img
            src={"https://images.meesho.com/images/pow/playstore-icon-big.webp"}
            alt="Google Play Image"
            width="45%"
          />

          <img
            src={"https://images.meesho.com/images/pow/appstore-icon-big.webp"}
            alt="Apple Store Image"
            width="45%"
          />
        </div>
      </div>

         <div className="box2">
             <div className="footer_text_clr">
                 <b>Careers</b>
             </div>
             <div className="footer_text_clr">
                 <b>Become a supplier</b>
             </div>
             <div className="footer_text_clr">
                 <b>Hall of Fame</b>
             </div>
             
         </div>


         <div className="box3">
             <div className="footer_text_clr">
                 <b>Legal and Policies</b>
             </div>
             <div className="footer_text_clr">
                 <b>Meesho Tech Blog</b>
             </div>
             <div className="footer_text_clr">
                 <b>Notices and Returns</b>
             </div>
         </div>


         <div className="box4">
           <div><h3><b className="rch">Reach out to us</b></h3></div>
             <div className="socialMedia">
                 
                 <a
              href='https://www.facebook.com/meeshosupply'
            target="_blank">
              <FaFacebook size={30}  />
            </a>
                 
              
                 <a
              href='https://www.instagram.com/meeshoapp/'
            target="_blank">
              <FaInstagramSquare size={30} color={"#FD04B0"} />
            </a>
                 
                 
                 <a
              href='https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw'
            target="_blank">
              <FaYoutube size={30} color={"red"} />
            </a>
                 
                 
                 <a

              href='https://www.linkedin.com/company/meesho'
            target="_blank">
              <FaLinkedin size={30} color={"blue"} />
            </a>
                 
                 
                 <a
              href='https://twitter.com/meeshoapp?lang=en'
            target="_blank">
              <FaTwitter size={30} color={"blue"} />
            </a>
                
             </div>
         </div>


              <div className="box5">
                  <h2 className="cntus">Contact Us</h2>
             <p className="footer_text_clr"> Fashnear Technologies Private <br /> Limited, <br />
                CIN: U74900KA2015PTC082263 <br />
                06-105-B, 06-102, (138 Wu) <br /> Vaishnavi Signature, No. 78/9,<br />
                Outer Ring Road, Bellandur, <br /> Varthur Hobli, Bengaluru-560103,<br /> Karnataka, India <br />
                E-mail address: <br /> query@meesho.com <br />
                © 2015-2022 Meesho.com</p>
         </div>

    </div>            
            
    </div>
  );
}

export default Footer