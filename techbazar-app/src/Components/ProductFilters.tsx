import React,{useEffect, useState} from "react"
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";


export const ProductFilters=()=>{
 const [searchParams,setSearchparams]=useSearchParams();
const initialcat=searchParams.get("category");
const initialBrnad=searchParams.get("brand");

const [cat,setCat]=useState<string>(initialcat||"");
const [brand,setBrand]=useState<string>(initialBrnad||"");

useEffect(()=>{
let params={};
if(cat){
  params={...params,category:cat}  
}
if(brand){
  params={...params,brand:brand}  
}
setSearchparams(params);

},[cat,brand])

    return(
        <DIV>
            <select value={cat} onChange={(e)=>{setCat(e.target.value)}}><option value="">Select Catagory</option>
            <option value="headphone">Headphones</option>
            <option value="Airdopes">Airdopes</option>
            <option value="Neckband">Neckband</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptops">Laptops</option>
            </select>

            <select value={brand} onChange={(e)=>{setBrand(e.target.value)}}>
                <option value="">Select brand</option>
                <option value="HP">HP</option>
                <option value="ASUS">ASUS</option>
                <option value="Lenovo">Lenovo</option>
            </select>
        </DIV>
    )
}

const DIV=styled.div`
display: flex;
justify-content: space-around;
width: 40%;
margin: auto;
margin-top:10px;
margin-bottom: 10px;
select{
    width: 40%;
}

`
