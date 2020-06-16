import {types} from './Account.types';

const initState = {
    message : ""
}

export const accountReducer = (state = initState, {type, payload}) => {

    switch(type) {
        case types.register : 
         return { ...state, message :  payload.message}
        case types.login : 
         return {...state, message : payload.message}
        case "RESET" : 
         return {...state, message : payload} 
        default :
         return state;  
    }
}