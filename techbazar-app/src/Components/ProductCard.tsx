import react from "react"
import { singleProduct } from "../Redux/ProductReducer/reducer"

export const ProductCard=({id,title,image,description,price,category,brand}:singleProduct)=>{


   return (
    <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h3>{price}</h3>
        <button className="cart_btn">Add to Cart</button>
    </div>
   ) 
}