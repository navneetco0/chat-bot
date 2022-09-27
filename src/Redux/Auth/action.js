import axios from 'axios';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

export const SET_LANGUAGES = 'SET_LANGUAGES'
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const USER_DATA = 'USER_DATA'
export const LOGOUT_USER = 'LOGOUT_USER'
export const UPDATE_USER = "UPDATE_USER"

export const setLanguages = (payload) => ({ type: SET_LANGUAGES, payload })
export const removeLanguage = (payload) => ({ type: REMOVE_LANGUAGE, payload })
export const loginLoading = () => ({ type: LOGIN_LOADING })
export const loginError = (payload) => ({ type: LOGIN_ERROR, payload })
export const userData = (payload) => ({ type: USER_DATA, payload })
export const logoutUser = () => ({ type: LOGOUT_USER })

export const registerUser = (form, languages) => (dispatch) => {
  dispatch(loginLoading())
  const formData = new FormData()
  formData.append('file', form.profile_pic)
  formData.append('first_name', form.first_name)
  formData.append('last_name', form.last_name)
  formData.append('phone', form.phone)
  formData.append('email', form.email)
  formData.append('password', form.password)
  formData.append('dob', form.dob)
  formData.append('gender', form.gender)
  formData.append('languages', languages)
  axios
    .post('https://chatbot-na.herokuapp.com/register', formData)
    .then((res) => {dispatch(userData(res.data)); if(res.data.token) dispatch(getData(res.data.token))})
    .catch((error) => dispatch(loginError(error)))
}

export const loginUser = (form) => (dispatch) => {
  dispatch(loginLoading())
  axios
    .post('https://chatbot-na.herokuapp.com/login', form)
    .then((res) => dispatch(userData(res.data)))
    .catch((error) => dispatch(loginError(error)))
}

export const getData = (token) => (dispatch) => {
  dispatch(loginLoading())
  axios
    .post('https://chatbot-na.herokuapp.com/',{}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {dispatch(userData(res.data)); socket.emit('welcome', (res.data.id));})
    .catch((error) => dispatch(loginError(error)))
}

export const updateUser = (data, token)=>(dispatch)=>{
   axios.patch('https://chatbot-na.herokuapp.com/', data, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }).then(res=>console.log(res.data))
  .catch(error=>console.log(error));
}
