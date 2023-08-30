import axios from 'axios';
import {act} from '../ProductReducer/reducer'
import { FAILED, GET_SUCCESS, REQUEST } from './actionTypes'

export type disType=(args:act)=>act


export const getData=(param:any)=>(dispatch:disType)=>{
dispatch({type:REQUEST});

axios.get(`https://techbazaar.onrender.com/products`,param).then((res)=>{
dispatch({type:GET_SUCCESS,payload:res.data as any});
}).catch((err)=>{
    dispatch({type:FAILED})
})

}








export {}