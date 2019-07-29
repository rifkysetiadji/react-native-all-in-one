import {LOADING,ADD,UPDATE,DELETE,GET_ALL} from '../constant/todo'
import BASE_URL from '../constant/baseUrl'
import axios from 'axios'
export const setLoading=(data)=>dispacth=>{
    console.log('loading',data)
    dispacth({
        type:LOADING,
        payload:data
    })
}
export const getAll=(data,tokens)=>dispacth=>{
    console.log('get all',data)
    dispacth(setLoading(true))
    axios.get(`${BASE_URL}/all/${data}`,{
        headers:{
            'Authorization': 'Bearer ' + tokens
        }
    })
    .then((res)=>{
        console.log('tet',res.data.todo)
        dispacth({
            type:GET_ALL,
            payload:res.data.todo
        })
        dispacth(setLoading(false))
    }).catch(err=>console.log('err',err))
}
export const add=(data,tokens)=>dispacth=>{
    console.log('add',data.userId)
    dispacth(setLoading(true)) 
    axios.post(`${BASE_URL}/add`,data,{
        headers:{
            'Authorization': 'Bearer ' + tokens
        }
    })
    .then((res)=>{
        console.log('tet',res)
        dispacth(getAll(res.data.todo.userId,tokens))
        dispacth(setLoading(false))
    }).catch(err=>console.log('err',err))
}

export const deleteTodo=(id,token,userId)=>dispacth=>{
    console.log('ddd',token)
    dispacth(setLoading(true)) 
    let config={
        headers:{
            'Authorization': 'Bearer ' + token
        }
    }
    axios.post(`${BASE_URL}/delete/${id}`,config)
    .then((res)=>{
        dispacth(getAll(userId,token))
        console.log('asdf',userId);

        dispacth(setLoading(false))
    }).catch(err=>console.log('err',err))
}