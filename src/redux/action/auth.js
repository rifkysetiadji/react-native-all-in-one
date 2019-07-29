import {LOGIN_SUBMIT,LOADING,USER_DETAIL,REGISTER_SUBMIT,LOGOUT_SUBMIT} from '../constant/auth'
import BASE_URL from '../constant/baseUrl'
import axios from 'axios'
import {Alert} from 'react-native'
export const login=(data)=>dispacth=>{
    // alert('asfd')
    dispacth(setLoading(true))
    axios.post(`${BASE_URL}/login`,data)
        .then(async(res)=>{
            if(res.data.auth !== false){
                // console.log('kkkk',res.data)
                dispacth({
                    type:LOGIN_SUBMIT,
                    payload:res.data,
                    isAuth:true,
                })
                // dispacth(getUserDetail(res.data.token))
                dispacth(setLoading(false))
            }else{
                dispacth({
                    type:LOGIN_SUBMIT,
                    payload:null,
                    isAuth:false
                })
                dispacth(setLoading(false))
                Alert.alert("Login", res.data.msg);
            }
        }).catch(err=>console.log(err))
   

}
export const register=(data)=>dispacth=>{
    dispacth(setLoading(true))
    axios.post(`${BASE_URL}/register`,data)
    .then(res=>{
        if(res.data.auth !== false){
            // console.log('kkkk',res.data)
            dispacth({
                type:REGISTER_SUBMIT,
                payload:res.data,
                isAuth:true,
            })
            // dispacth(getUserDetail(res.data.token))
            dispacth(setLoading(false))
        }else{
            dispacth({
                type:REGISTER_SUBMIT,
                payload:null,
                isAuth:false
            })
            dispacth(setLoading(false))
            Alert.alert("Register", res.data.msg);
        }
    })
}
export const getUserDetail=(token)=>dispacth=>{
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    axios.get(`${BASE_URL}/check`,config)
    .then(res=>{
        // console.log('from action get',res.data.user)
        dispacth({
            type:USER_DETAIL,
            payload:res.data.user
        })
        return res.data.user
    })
}
export const logoutUser=()=>dispatch=>{
    dispatch({
        type:LOGOUT_SUBMIT,
        payload:null,
        isAuth:false 
    })
}
export const setLoading=(data)=>dispacth=>{
    dispacth({
        type:LOADING,
        payload:data
    })
}