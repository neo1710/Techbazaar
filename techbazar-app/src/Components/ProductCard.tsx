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
        <div className="card">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h3>₹{price}</h3>
        <button onClick={()=>{setAlert(true)}} className="cart_btn">Add to Cart</button>
        {alert && <Alert status="success" >
         <AlertIcon/>
         Added to cart
         </Alert>}
        </div>
    </DIV>
   ) 
}

const DIV=styled.div`
 width :100% ;
 padding: 5px;
 img{
height: 200px;
margin: auto;
}
.cart_btn{
   background-color :#00472F ;
   color:white;
   width: 40%;
   padding: 5px;
   margin-bottom: 10px;
   border-radius: 10px;
   box-shadow: #00472F 0px 5px 15px;

}
.cart_btn:hover{
   background-color: gray;
}
.card{
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   padding: 5px;
   border-radius: 20px;
}
.card:hover{
   transform: scale(1.1);
   cursor: pointer;
   transition: 0.2s ease-in-out;
}
text-align:center;
`
