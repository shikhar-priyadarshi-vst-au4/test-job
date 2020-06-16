import {links} from './Account.links';
import {types} from './Account.types';
export const register = (data) => {
   return async dispatch => {
      try{
        let res = await (await fetch(links.register, {
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })).json();
        if(res.status){
            return dispatch({
                type : types.register,
                payload : res
            })
        }
      }
      catch(error){
         return dispatch({
             type : types.register,
             payload : error.message
         })
      }
   }
}

export const login = (data) => {
    return async dispatch => {
        try{
          let res = await (await fetch(links.login,{
              method : "POST",
              headers : { "content-type" : "application/json"},
              body : JSON.stringify(data)
          })).json();
          if(res.status){
            return dispatch({
                type : types.login,
                payload : res
            })
        }
        }
        catch(error){
            return dispatch({
                type : types.login,
                payload : error.message
            })
        }
     }
}