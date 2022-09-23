import { LOGIN_ERROR, LOGIN_LOADING, REMOVE_LANGUAGE, SET_LANGUAGES, USER_DATA } from "./action"

const init = {
   languages:[],
   token:localStorage.getItem('ITG')||null,
   login_loading:false,
   login_error:null,
   userData:{}
}

export const authReducer = (store=init, {type, payload})=>{
    switch(type){
        case SET_LANGUAGES:
            let found = store.languages.find(Element=>Element===payload);
            if(found) return store;
            return {...store, languages:[...store.languages, payload]}
        case REMOVE_LANGUAGE:
            return {...store, languages:store.languages.filter(Element=>Element!==payload)}
        case LOGIN_LOADING:
            return {...store, login_loading:true}
        case LOGIN_ERROR:
            return {...store, login_loading:payload, login_error:true}
        case USER_DATA:
            if(payload.token) localStorage.setItem('ITG', payload.token)
            return {...store, login_loading: false, login_error: null, token:payload.token, userData:payload}
        default:
            return store
    }
}
