import axios from "axios";

export const CHAT = "CHAT"
export const SET_CONTACTS="SET_CONTACTS";

export const setChat = payload => ({type:CHAT, payload});
export const setContacts = payload => ({type:SET_CONTACTS, payload});

export const getContacts = ({token})=>(dispatch)=>{
    axios.post('http://localhost:5000/min',{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
     }).then(res=>dispatch(setContacts(res.data))).catch(error=>console.log(error))
}

export const postChat = ({input, id, token})=>(dispatch)=>{
  axios.post('http://localhost:5000/chats',{input, id}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
     }).then(res=>console.log(res)).catch(error=>console.log(error))
}