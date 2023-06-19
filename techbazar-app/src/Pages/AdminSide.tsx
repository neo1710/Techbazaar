import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import AdminPage from "./AdminPage"
import SeeProductPage from "./SeeProductPage"

export const AdminSide=()=>{

    return (
        <div>
            <Navbar/><br/>
            <AdminPage/>
            <SeeProductPage/>
            <Footer/>
        </div>
    )
}