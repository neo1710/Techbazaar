import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Homepage'
import { ProductPage } from './ProductPage'
import { Login } from './LoginPage'
import { CartPage } from './CartPage'
import { Signup } from './SignupPage'
import { AdminSide } from './AdminSide'
import { AdminLogin } from './AdminLogin'
import { SingleProductPage } from './SingleProductPage'
import PrivateRoute from '../Components/PrivateRouter'
import Checkout from './CheckoutPage'



export const MainRoutes=()=>{
   return (
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/products' element={<ProductPage/> }/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>} />
   <Route path='/cart' element={<CartPage/>}/>
   <Route path='/admin' element={<AdminSide/>} />
   <Route path='/adminlogin' element={<AdminLogin />} />
   <Route path='/checkout' element={<Checkout/>} />
   <Route path='/products/:id' element={<SingleProductPage/>}/>
    </Routes>
   ) 
}

