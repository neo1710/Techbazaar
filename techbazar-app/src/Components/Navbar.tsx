import React, { useEffect, useState } from 'react'
import '../App.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone,faChevronDown,faMagnifyingGlass,faUser,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'
import { Link,NavLink } from 'react-router-dom';
import Logo from "../Images/Logo.png"

function Navbar() {

    const [isAtTop, setIsAtTop] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition >= 20)
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
},[]);

console.log(isAtTop)


  return (
    <div>
        <div className='greenBarTop'>
            <div><FontAwesomeIcon icon={faPhone} size="sm" /> +0138748343</div>
            <div style={{display:"flex", justifyContent:"space-between", width:"280px", alignItems:"center"}}>
                <div>50% off on selected item </div>
                <div>|</div>
                <Link to="/products" style={{color:"#fff", textDecoration:"underline"}}>Shop Now</Link>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"150px", alignItems:"center"}}>
                <div >Eng <FontAwesomeIcon icon={faChevronDown} size="sm" /></div>
                <div>Location <FontAwesomeIcon icon={faChevronDown} size="sm" /></div>
            </div>
        </div>
        <div className={isAtTop?"Nav2":"Nav1"}>
            <Link to='/'>
            <img src={Logo} alt="logo" />
            </Link>
            <div className='NavLinkDiv'>
              <NavLink className="NavLink" to="/products">Products</NavLink>
              <NavLink className="NavLink" to="">Deals</NavLink>
              <NavLink className="NavLink" to="">What's New</NavLink>
              <NavLink className="NavLink" to="">Delivery</NavLink>
            </div>
            
            <div className='inputBox'>
            <input type="text" placeholder='Search Products' />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{color: "#808080",}} />
            </div>
           
           <div className='Account'>
            <div>
            <FontAwesomeIcon icon={faUser} size="sm"/> <Link to="/signup" className='AccountLinks'>Account</Link>
            </div>
            <div>
            <FontAwesomeIcon icon={faCartShopping} size="sm" /> <Link to="/cart" className='AccountLinks'>Cart</Link>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar