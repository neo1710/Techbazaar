
 export type State={
    isLoading:boolean,
    isError:boolean,
    isAuth:boolean,
    userData:[]
}

export type user={
    name?:string,
    email:string,
    password:string
}

const initialState:State={
    isLoading:false,
    isError:false,
    isAuth:false,
    userData:[]
}

export type Action={
    type:string,
    payload?:any
}

    export const reducer=(state=initialState,{type,payload}:Action)=>{
        switch (type) {
            case "Login_Request":
                return {...state,isLoading:true}
                case "LOGOUT_REQ":
                return {...state,isAuth:false}
            case "Login_Success":
                return {...state,isLoading:false,isAuth:true,userData:payload}
            case "Signup_Success":
                return {...state,isLoading:false,isAuth:true,userData:payload}
            case "Login_Failure":
                return {...state,isError:true}
            default:
                return state;
        }
    }
   