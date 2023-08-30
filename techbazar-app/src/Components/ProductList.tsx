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
<br /><br />
<div className="pagi">
            <button className="page" disabled={page===1} onClick={()=>{setPage(page-1)}}>Prev</button>
            <button className="page">{page}</button>
            <button className="page"  disabled={page===4} onClick={()=>{setPage(page+1)}}>Next</button>
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
}
.pagi{
   display: flex;
   width: 20%;
   justify-content: space-around;
   margin:auto;
   margin-top:10px;
}
.page{
   background-color: #00472F;
   color:white;
   width: 30%;
   border-radius: 10px;
   box-shadow: #00472F 0px 5px 10px;
}
.page:hover{
   background-color: gray;
}
`
// https://happy-blue-lab-coat.cyclic.app/