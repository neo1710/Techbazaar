import React from 'react'
import "../App.css"
import { Heading, Text } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
interface checkTypes{
    image:string;
    price:string;
    text:string;
    title:string

}


function HomePageProductsCard({image,price,text,title}:checkTypes) {
  return (
    <div className='HomePageProdCards'>
     <img src={image} alt="image" />
     <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
     <Heading fontSize={"20px"} fontWeight={"700"}>{title}</Heading>
     <Heading fontSize={"20px"} fontWeight={"700"}>{price}</Heading>
     </div>
     <Text fontSize={"14px"} marginTop={"10px"}>{text}</Text>
     <Link to="/products">
     <button>Add to Cart</button>
     </Link>
     
    </div>
  )
}

export default HomePageProductsCard

