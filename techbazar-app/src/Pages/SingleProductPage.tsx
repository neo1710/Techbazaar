import { useParams } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { singleProduct } from "../Redux/ProductReducer/reducer";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

export const SingleProductPage=()=>{
const {id}=useParams();
const [data,setData]=useState<singleProduct>();

useEffect(()=>{
axios.get(`https://happy-blue-lab-coat.cyclic.app/products/${id}`).then((res)=>{
setData(res.data);
})

},[])

    return (
        <DIV>
            <Navbar/><br />
<div className="structure">
<div className="image">
    <h1 className="title">{data?.title}</h1><br />
<img src={data?.image} alt="" />
</div>
<div className="details">
    <h3>{data?.description}</h3>
    <h3 className="price">₹{data?.price}</h3>
    <h4>{data?.category}</h4>
    <h4>{data?.brand}</h4><br />


<button >Add to cart</button>

</div>
</div><br />


            <Footer/>
        </DIV>
    )
}


const DIV=styled.div`
width: 100%;
.structure{
width: 90%;
margin: auto;
display: flex;
justify-content: space-around;
}
  .image{
    width: 50%;
margin-top:100px;
background-color: grey;
  } 
  .image > img{
    width: 90%;
    margin: auto;
  } 
  .details{
    margin-top: 100px;
   
    width: 40%;
  }
  .title{
    font-size: larger;
  }
  .price{
   color :green ;
   font-size: large;
  }
  button{
    background-color: #00472F;
    color: white;
    border-radius: 30% 0%;
    width: 20%;
  }
  .ron{
    display: flex;
    width:70%;
     height: 60px;
     background-color: #00472F;
     justify-content: space-around;
     align-items: center;
}
.ron > div{
   width :20% ;
   height: 50px;
   border-radius: 50%;
   
}
.ron > div:hover{
    width: 25%;
    height: 55px;
}
.black{
background-color: black;
}
.white{
background-color: white;
}
.grey{
background-color: grey;
}
.c{
    font-size: large;
    color:#00472F;
}
`