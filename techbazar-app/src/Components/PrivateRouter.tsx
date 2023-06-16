import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const privateRoute = ({children}:any) => {
    
    const location=useLocation()
    const {isAuth}=useSelector((store:any)=>store.authReducer)
  return isAuth ? children:<Navigate to={"/signup"} state={location.pathname} replace={true} />
}

export default privateRoute;