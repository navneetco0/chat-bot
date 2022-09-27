import { CHAT, SET_CONTACTS } from "./action"

const init = {
   chat:[],
   contacts:[]
}

export const chatReducer = (store=init, {type, payload})=>{
    switch(type){
        case CHAT:
            return {...store, chat:payload.chats}
        case SET_CONTACTS:
            return {...store, contacts:payload}
        default:
            return store
    }
}
