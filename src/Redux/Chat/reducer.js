import { CHAT } from "./action"

const init = {
   chat:[],
}

export const chatReducer = (store=init, {type, payload})=>{
    switch(type){
        case CHAT:
            console.log(payload)
            return {...store, chat:[...store.chat, payload]}
        default:
            return store
    }
}
