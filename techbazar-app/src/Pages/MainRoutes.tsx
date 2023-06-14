import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Homepage'
import { ProductPage } from './ProductPage'
import { Login } from './LoginPage'
import { CartPage } from './CartPage'

export {Routes,Route} from 'react-router-dom'

export const MainRoutes=()=>{

   return (
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/products' element={<ProductPage/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/cart' element={<CartPage/>}/>
    </Routes>
   ) 
}