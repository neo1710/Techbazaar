import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faChevronDown,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
function Navbar() {
  const [isAtTop, setIsAtTop] = useState<Boolean>(false);
  const {isAuth}=useSelector((store:any)=>store.authReducer)
  const dispatch = useDispatch()
  const name=JSON.parse(localStorage.getItem("userName")||"")
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition >= 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isAtTop);

  return (
    <div>
      <div className="greenBarTop">
        <div>
          <FontAwesomeIcon icon={faPhone} size="sm" /> +0138748343
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "280px",
            alignItems: "center",
          }}
        >
          <div>50% off on selected item </div>
          <div>|</div>
          <Link
            to="/products"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Shop Now
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "150px",
            alignItems: "center",
          }}
        >
          <div>
            Eng <FontAwesomeIcon icon={faChevronDown} size="sm" />
          </div>
          <div>
            Location <FontAwesomeIcon icon={faChevronDown} size="sm" />
          </div>
        </div>
      </div>
      <div className={isAtTop ? "Nav2" : "Nav1"}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="NavLinkDiv">
          <NavLink
            className={({ isActive }:any) =>
             isActive ? "NavLinkActive" : "NavLink"
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink className={({ isActive }:any) =>
             isActive ? "NavLinkActive" : "NavLink"
            } to="/deals">
            Deals
          </NavLink>
          <NavLink className={({ isActive }:any) =>
             isActive ? "NavLinkActive" : "NavLink"
            } to="/whatsNew">
            What's New
          </NavLink>
          <NavLink className={({ isActive }:any) =>
             isActive ? "NavLinkActive" : "NavLink"
            } to="/delivery">
            Delivery
          </NavLink>
        </div>

        <div className="inputBox">
          <input type="text" placeholder="Search Products" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="sm"
            style={{ color: "#808080" }}
          />
        </div>

        <div className="Account">

          {isAuth?<div onClick={()=>{
            Swal.fire(
              'Successfull!',
              'You logout Successfully!',
              'success'
            )
            console.log("clicked,", isAuth)
            dispatch({type:"LOGOUT_REQ"})
            
          }}>
            
            <Text style={{color:"black"}}><FontAwesomeIcon icon={faUser} size="sm" />{" "}{name}</Text>
            <FontAwesomeIcon icon={faArrowRightFromBracket} size="sm" />{" "}
            
            <Link to="" className="AccountLinks">
              Logout
            </Link>
          </div> :
          <div>
          <FontAwesomeIcon icon={faUser} size="sm" />{" "}
          <Link to="/login" className="AccountLinks">
            Account
          </Link>
        </div>
          }
          
          <div>
            <FontAwesomeIcon icon={faCartShopping} size="sm" />{" "}
            <Link to="/cart" className="AccountLinks">
              Cart
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
