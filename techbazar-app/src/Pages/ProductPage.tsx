import styled from "@emotion/styled"
import Navbar from "../Components/Navbar"
import { ProductList } from "../Components/ProductList"
import { ProductFilters } from "../Components/ProductFilters"

export const ProductPage=()=>{

    return (
<DIV>
<Navbar/>
<div className="banner"><img src="https://socialweb.ro/wp-content/uploads/2019/10/ads-headphone.png" alt="" /></div>

<ProductFilters/>

<ProductList/>


</DIV>
    )
}


const DIV=styled.div`
.banner{
    width: 100%;
}
    .banner>img{
        width: 100%;
    }
`