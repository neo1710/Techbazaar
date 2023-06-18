import react,{useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { disType, getData } from "../Redux/ProductReducer/action";

import { ProductCard } from "./ProductCard";
import { singleProduct } from "../Redux/ProductReducer/reducer";
import { useSearchParams } from "react-router-dom";


export const ProductList=()=>{
const productData=useSelector((store:any)=>store.productReducer.products);
let [searchParams]=useSearchParams();
let brand=searchParams.get('brand');
let category=searchParams.get('category');
const [page,setPage]=useState<number>(1);
const dispatch=useDispatch();
useEffect(()=>{
   const param={
      params:{
      _page:page,
      _limit:8,
      category,
      brand
      }
   }
dispatch<any>(getData(param));
},[searchParams,page])


   return(
    <DIV>
      <div className="list">
{productData.map((ele:singleProduct)=>(
   <ProductCard key={ele.id} {...ele} />
))
}
</div><br />
<div className="pagi">
            <button disabled={page===1?true:false} onClick={()=>{setPage(page-1)}}>Prev</button><button>{page}</button><button onClick={()=>{setPage(page+1)}}>Next</button>
        </div>
    </DIV>
   ) 
}

const DIV=styled.div`
width: 100%;
.list{
display: grid;
grid-template-columns: repeat(4,1fr);
width:90%;
gap:5%;
margin: auto;
margin-bottom:10px;
}
.pagi{
   display: flex;
   width: 20%;
   justify-content: space-around;
   margin:auto;
   margin-top:10px;
}
button{
   background-color: #00472F;
   color:white;
}
`
// https://happy-blue-lab-coat.cyclic.app/