import React from 'react'
import '../App.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPhone,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Logo from "../Images/Logo.png"

function Navbar() {
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
        <div className='Nav'>
            <Link to='/'>
            <img src={Logo} alt="logo" />
            </Link>

            <div>
                
            </div>
           
        </div>
    </div>
  )
}

export default Navbar