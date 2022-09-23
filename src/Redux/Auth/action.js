import axios from "axios";

export const SET_LANGUAGES = "SET_LANGUAGES";
export const REMOVE_LANGUAGE = "REMOVE_LANGUAGE";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_DATA = "USER_DATA";

export const setLanguages = payload =>({type:SET_LANGUAGES, payload})
export const removeLanguage = payload => ({type:REMOVE_LANGUAGE, payload});
export const loginLoading = () => ({type: LOGIN_LOADING});
export const loginError = payload => ({type:LOGIN_ERROR, payload});
export const userData = payload => ({type:USER_DATA, payload});


export const registerUser = (form, languages)=>(dispatch)=>{
    const formData = new FormData();
    formData.append("file", form.profile_pic);
    formData.append("first_name", form.first_name);
    formData.append("last_name", form.last_name);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("dob", form.dob);
    formData.append("gender", form.gender);
    formData.append("languages", languages);
    console.log(formData);
    axios.post('https://chatbot-na.herokuapp.com/register', formData)
    .then((res)=>console.log(res.data))
    .catch(error=>console.log(error))
}

export const loginUser = (form) => (dispatch)=>{
    dispatch(loginLoading());
    axios.post('https://chatbot-na.herokuapp.com/login',form)
    .then((res)=>dispatch(userData(res.data)))
    .catch(error=>dispatch(loginError(error)))
}