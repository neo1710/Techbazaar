import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}:any) => {
    
    const location=useLocation()
    const {isAuth}=useSelector((store:any)=>store.authReducer)
  return isAuth ? children:<Navigate to={"/login"} state={location.pathname} replace={true} />
}

export default PrivateRoute;