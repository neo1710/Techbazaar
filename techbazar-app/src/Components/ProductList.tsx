import react,{useEffect} from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { disType, getData } from "../Redux/ProductReducer/action";

import { ProductCard } from "./ProductCard";
import { singleProduct } from "../Redux/ProductReducer/reducer";


export const ProductList=()=>{
const productData=useSelector((store:any)=>store.productReducer.products);
const dispatch=useDispatch();
useEffect(()=>{
   const param={
      params:{
      _page:1,
      _limit:8
      }
   }
dispatch<any>(getData(param));
},[])


   return(
    <DIV>
{productData.map((ele:singleProduct)=>(
   <ProductCard key={ele.id} {...ele} />
))
}
    </DIV>
   ) 
}

const DIV=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
width:90%;
gap:5%;
margin: auto;
`
// https://happy-blue-lab-coat.cyclic.app/