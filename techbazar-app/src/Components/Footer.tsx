import React from 'react'
import Logo from "../Images/Logo.png"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartFlatbedSuitcase,faGift,faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className='footerMainDiv'>
        <div className='mainFooter'>
            <div style={{width:"30%"}}>
                <img src={Logo} alt="logo" id='imgFooter' />
                <p style={{margin:"20px 0px 30px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magni ab distinctio assumenda, vel ratione accusamus impedit sapiente illo aliquam.</p>
                <p style={{fontWeight:"700"}}>Account Payments</p>
                <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", margin:"20px 0px 0px 0px", width:"300px", gap:"10px"}}>
                  <div className='smallImageBox'>
                    <img src="https://media.designrush.com/inspiration_images/135142/conversions/_1511452770_462_stripe-preview.jpg" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://logowik.com/content/uploads/images/857_visa.jpg" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.png" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F81950474406%2F1622121594481%2F2Klarna-top-box2-retina-715586.jpg%3Fv%3D0&c_options=" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                  <img src="https://pngimg.com/uploads/paypal/paypal_PNG9.png" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://www.pngkit.com/png/detail/235-2355595_apple-pay-logo.png" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/Screenshot_2020-11-05_at_5.14._1200x768.png?size=690:388" alt="img" />
                  </div>
                </div>
            </div>
            <div className='linkDivs'>
                <p className='footerHeadings'>Department</p>
                <a href="">Fashion</a>
                <a href="">Education Products</a>
                <a href="">Frozen Food</a>
                <a href="">Beverages</a>
                <a href="">Organic Grocery</a>
                <a href="">Office Supplies</a>
                <a href="">Beauty Products</a>
                <a href="">Books</a>
                <a href="">Electronic & Gadges</a>
                <a href="">Trivel Accessories</a>
                <a href="">Fitness</a>
                <a href="">Sneakers</a>
                <a href="">Toys</a>
                <a href="">Furniture</a>
            </div>
            <div className='linkDivs'>
                <p className='footerHeadings'>About Us</p>
                <a href="">About Shopcart</a>
                <a href="">Careers</a>
                <a href="">News & Blogs</a>
                <a href="">Help</a>
                <a href="">Press Center</a>
                <a href="">Shop by Location</a>
                <a href="">Shopcard Brands</a>
                <a href="">Affiliate & Partners</a>
                <a href="">Ideas & Guides</a>
            </div>
            <div className='linkDivs'>
                <p className='footerHeadings'>Servises</p>
                <a href="">Gift Cart</a>
                <a href="">Mobile App</a>
                <a href="">Shipping & Delivery</a>
                <a href="">Order Pickup</a>
                <a href="">Account Signup</a>
            </div>
            <div className='linkDivs'>
                <p className='footerHeadings'>Help</p>
                <a href="">Shopcart Help</a>
                <a href="">Returns</a>
                <a href="">Track Orders</a>
                <a href="">Contact us</a>
                <a href="">Organic Grocery</a>
                <a href="">Feedback</a>
                <a href="">Security & Fraud</a>
            </div>
        </div>

        <div className='footerBottom'>
           <div style={{display:"flex", justifyContent:"space-between", width:"360px"}}>
        <div> <FontAwesomeIcon icon={faCartFlatbedSuitcase} style={{color: "#df3ad9",}} /> Become Seller</div>
        <div> <FontAwesomeIcon icon={faGift} style={{color: "#df3ad9",}} /> Gift Cards </div>
        <div> <FontAwesomeIcon icon={faCircleInfo}  style={{color: "#df3ad9",}} /> Help Center</div>
           </div>
           <div style={{display:"flex", justifyContent:"space-between", width:"190px"}}>
           <div>Terms of Use</div>
           <div>Privacy Policy</div>
           </div>
           <div>All Right Reserved By Musemind | 2023</div>
        </div>
    </div>
  )
}

export default Footer