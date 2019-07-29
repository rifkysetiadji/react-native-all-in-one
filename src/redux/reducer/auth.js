import {LOGIN_SUBMIT,REGISTER_SUBMIT,LOGOUT_SUBMIT,LOADING,USER_DETAIL} from '../constant/auth';
// import console = require('console');
// import console = require('console');
const initialState={
    loading:false,
    token:null,
    isAuth:false,
    user:null
}

export default function(state=initialState,action){
    switch (action.type) {
        case LOGIN_SUBMIT:
            // alert('asdf')
            // console.log('from reducer login')
            return{
                ...state,
                user:action.payload,
                isAuth:action.isAuth 
            }
        case REGISTER_SUBMIT:
            return{
                ...state,
                user:action.payload,
                isAuth:action.isAuth

            }
        case LOGOUT_SUBMIT:
            return{
                ...state,
                user:action.payload,
                isAuth:action.isAuth
            }
        case LOADING:
            return{
                ...state,
                loading:action.payload
            }
        case USER_DETAIL:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}