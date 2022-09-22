import { REMOVE_LANGUAGE, SET_LANGUAGES } from "./action"

const init = {
   languages:[]
}

export const authReducer = (store=init, {type, payload})=>{
    switch(type){
        case SET_LANGUAGES:
            let found = store.languages.find(Element=>Element===payload);
            if(found) return store;
            return {...store, languages:[...store.languages, payload]}
        case REMOVE_LANGUAGE:
            return {...store, languages:store.languages.filter(Element=>Element!==payload)}
        default:
            return store
    }
}
