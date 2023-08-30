import { useEffect, useState } from "react"
import { cartItem } from "./SingleProductPage"
import axios from "axios";
import { CartCard } from "../Components/cartCard";
import styled from "@emotion/styled";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export const CartPage=()=>{
const [cart,setCart]=useState<cartItem[]|[]>([]);
const [Total,setTotal]=useState<number>(0);
localStorage.setItem("count",JSON.stringify(cart.length))
function getProduct(){
    axios.get(`https://techbazaar.onrender.com/Carts`).then((res)=>{
setCart(res.data);
}).catch((err)=>{
console.log(err)
});
}
useEffect(()=>{
getProduct();
},[])

useEffect(()=>{
let num:number=0;

cart.map((ele)=>{
    num+=Number(ele.price)*Number(ele.quantity);
})
setTotal(num);

},[cart])

function delB(id:number){
let Newcart:cartItem[]|[]=cart.filter((ele)=>id!==ele.id);
setCart(Newcart);
}

function decButton(id:number){
    let newCart:cartItem[]=[];

    cart.map((ele)=>{
     if(ele.id===id){
      ele.quantity--;
     }
      newCart.push(ele);
    })
    setCart(newCart);
   
}
    

function incButton(id:number){
  let newCart:cartItem[]=[];

  cart.map((ele)=>{
   if(ele.id===id){
    ele.quantity++;
   }
    newCart.push(ele);
  })
  setCart(newCart);
}

    return (
        <DIV>
<Navbar/>
<div className="struc">
<div className="cards">
    {cart.map((ele)=>(
    <CDIV>
    <img src={ele.image} alt="" /><br />
    <h2>{ele.title}</h2><br />
    <h2 className="price">₹{ele.price}</h2><br />
    <button onClick={()=>{delB(ele.id)}} className="del">Delete</button><br />
  <div className="quant">  <button  onClick={()=>{incButton(ele.id)}}>+</button>
   <button disabled>{ele.quantity}</button> <button disabled={ele.quantity===1} onClick={()=>{decButton(ele.id)}}>-</button></div>

</CDIV>
    ))}
</div>

<div className="total">
    

    <div className="box">
    <h1>Cart Total</h1>
        <div><h2>Cart Value: ₹ {Total}</h2></div> 
          <div><h2>Discount: 0%</h2></div> 
         <div> <h2>Dilivery Charge: Free</h2></div>       
        <div><h2>Total Amout: ₹ {Total}</h2></div> 
        <div><Link to={"/checkout"}><button className="checkout">Place your order</button></Link></div>
    </div>
</div>
</div>
<Footer/>
        </DIV>
    )
}


const DIV=styled.div`
width: 100%;
.struc{
    margin: 90px 0px 0px 0px;
    display: flex;
    width: 100%;
    justify-content: space-around;
}

  .cards{
width: 50%;
margin-top: 40px;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 10px;
  }  
  .total{
    width: 40%;
    font-size: 25px;
    margin-top: 50px;

  }
  .box{
    width: 100%;
    margin: auto;
    border: 1px solid white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   padding: 10px;
   border-radius: 20px;
  }
  .box>div{
    margin:auto;
    padding: 5px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: #00472F 0px 5px 5px;

  }
  .box > h1{
    font-size: larger;
    text-align: center;
    font-weight: bolder;
    color: #00472F;
  }
  .checkout{
    background-color: #00472F;
    color: white;
    width: 100%;
    border-radius: 10px;
    box-shadow: #00472F 0px 5px 5px;

  }
  .checkout:hover{
    background-color: gray;
  
  }
`



const CDIV=styled.div`
display: block;
margin-top: 10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding: 5px;
border-radius: 20px;
img{
  height: 200px;
margin: auto;
}
.price{
    color:#00472F;
    font-size:25px
}
.del{
   background-color :red ;
   display: block;
   margin: auto;
   width: 30%;
   color:white;
   border-radius: 10px;
   padding:5px;
   box-shadow: red 0px 5px 15px;

}
.del:hover{
    background-color: grey;
}
h2{
    text-align:center;
    font-size:25px
}
div{
    display: flex;
   margin :auto ;
   width: 40%;
   justify-content: space-around;
}
div>button{
background-color: #00472F;
color: white;
width: 25%;
margin-bottom: 10px;
border-radius: 10px;
box-shadow: #00472F 0px 5px 15px;
}
div > button:hover{
background-color: black;
color: white;

display: block;
}
`