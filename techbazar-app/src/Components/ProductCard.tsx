import react, { useState } from "react"
import { singleProduct } from "../Redux/ProductReducer/reducer"
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
 } from '@chakra-ui/react'

export const ProductCard=({id,title,image,description,price,category,brand}:singleProduct)=>{
const navigate=useNavigate();
const [alert,setAlert]=useState<Boolean>(false);

function nav(){
   navigate(`/products/${id}`);
}
   return (
    <DIV onClick={nav}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h3>₹{price}</h3>
        <button onClick={()=>{setAlert(true)}} className="cart_btn">Add to Cart</button>
        {alert && <Alert status="success" >
         <AlertIcon/>
         Added to cart
         </Alert>}
    </DIV>
   ) 
}

const DIV=styled.div`
 width :100% ;
 padding: 5px;
img{
height: 250px;
}
.cart_btn{
   background-color :#00472F ;
   color:white;
   width: 40%;
}
.cart_btn:hover{
   background-color: gray;
}
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
