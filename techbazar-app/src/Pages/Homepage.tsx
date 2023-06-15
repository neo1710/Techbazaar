import { Heading } from "@chakra-ui/react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

export const HomePage=()=>{

    return (
        <div className="HomePage">
           <Navbar /> 
            <Heading style={{margin:"80px"}}>Hii</Heading>
           <Footer/>
        </div>
    )
}
