import {LOADING,ADD,UPDATE,DELETE,GET_ALL} from '../constant/todo'
const initialState={
    todo:'',
    todos:null,
    loading:false
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_ALL:
            return{
                ...state,
                todos:action.payload
            }
        case LOADING:
            return{
                ...state,
                loading:action.payload
            }
            default:
                    return state;
    }
}