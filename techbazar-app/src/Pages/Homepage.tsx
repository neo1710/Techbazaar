import { Button, Heading, Text } from "@chakra-ui/react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

export const HomePage=()=>{

    return (
        <div className="HomePage">
           <Navbar /> 
            
            <div className="bgPoster">
                <div style={{width:"500px"}}>
                <Heading fontSize='50px' color='#00472F'>Shopping And Department Store.</Heading>
                <Text fontSize="18px" marginTop="30px">Shopping is a bit of relaxing hobby from me, which is something troubling for the bank balance</Text>
                <Button marginTop="30px" borderRadius="50px" background="#00472F" color="#fff" padding="0px 20px 0px 20px" transition=".5s" _hover={{ backgroundColor: "#006040", padding: "2px 22px 2px 22px", transition:".5s" }}>Learn More</Button>
                </div>
           
            </div>
           <Footer/>
        </div>
    )
}
