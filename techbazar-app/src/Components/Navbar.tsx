import React, { useEffect, useState } from 'react'
import '../App.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone,faChevronDown,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
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
            <div style={{display:"flex", justifyContent:"space-between", width:"24%", alignItems:"center"}}>
                <div>50% off on selected item </div>
                <div>|</div>
                <Link to="" style={{color:"#fff"}}>Shop Now</Link>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"14%", alignItems:"center"}}>
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
            
        </div>
    </div>
  )
}

export default Navbar