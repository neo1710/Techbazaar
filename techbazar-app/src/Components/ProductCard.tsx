import react from "react"
import { singleProduct } from "../Redux/ProductReducer/reducer"
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";


export const ProductCard=({id,title,image,description,price,category,brand}:singleProduct)=>{
const navigate=useNavigate();

function nav(){
   navigate(`/products/${id}`);
}
   return (
    <DIV onClick={nav}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h3>{price}</h3>
        <button className="cart_btn">Add to Cart</button>
    </DIV>
   ) 
}

const DIV=styled.div`
 width :100% ;
img{
width : 80%;
}
.cart_btn{
   background-color :#00472F ;
   color:white
}
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
