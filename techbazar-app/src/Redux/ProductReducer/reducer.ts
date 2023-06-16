
//types
export interface singleProduct {
    id: number,
    title: string,
    price: string,
    image: string,
    description: string,
    category: string,
    brand:string
  }

  
export interface product {
    products:singleProduct[],
    isLoading:false,
    isError:false   
}

export interface act {
   type:string,
   payload?:any 
}




// reducer
const initialState:product={
    products:[],
    isLoading:false,
    isError:false
}




export const reducer=(state=initialState,action:act)=>{
switch(action.type){
case "REQUEST":{
return{
...state,
isLoading:true
}
}
case "GET_SUCCESS":{
return {
   ...state,
   isLoading:false,
   products:action.payload 
}
}
case "FAILED":{
return {
    ...state,
    isLoading:false,
    isError:true
}
}
default:{
return state
}
}
}