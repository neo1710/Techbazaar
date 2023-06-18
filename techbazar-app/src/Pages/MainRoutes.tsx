
export {};

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



export const MainRoutes=()=>{
   return (
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/products' element={<PrivateRoute><ProductPage/></PrivateRoute> }/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>} />
   <Route path='/cart' element={<CartPage/>}/>
   <Route path='/admin' element={<AdminSide/>} />
   <Route path='/adminlogin' element={<AdminLogin />} />
   <Route path='/products/:id' element={<SingleProductPage/>}/>
    </Routes>
   ) 
}

