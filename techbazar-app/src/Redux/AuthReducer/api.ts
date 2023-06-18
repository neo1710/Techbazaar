import axios,{AxiosResponse} from "axios"
import { Login_Failure, Login_Request, Login_Success, Signup_Success} from "./apiType"

import {Action, user } from "./reducer"
export type disType=(args:Action)=>Action

export const getuser=(dispatch:disType)=>{
   dispatch({type:Login_Request})
   axios.get(`https://happy-blue-lab-coat.cyclic.app/Users`).then((res)=>{
      dispatch({type:Login_Success,payload:res.data as any})
   })
   .catch((err)=>{
      dispatch({type:Login_Failure})
   })

    
}

export const adduser=(newUser:user)=>(dispatch:disType)=>{
   dispatch({type:Login_Request})
    axios.post(`https://happy-blue-lab-coat.cyclic.app/Users`,newUser).then((res)=>{
      dispatch({type:Signup_Success,payload:res.data as any})
    })
    .catch((err)=>{
      dispatch({type:Login_Failure})
    })  
 }

 export{}