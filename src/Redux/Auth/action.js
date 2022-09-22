import axios from "axios";

export const SET_LANGUAGES = "SET_LANGUAGES";
export const REMOVE_LANGUAGE = "REMOVE_LANGUAGE"

export const setLanguages = payload =>({type:SET_LANGUAGES, payload})
export const removeLanguage = payload => ({type:REMOVE_LANGUAGE, payload});

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
    axios.post('http://localhost:5000/register', formData)
    .then((res)=>console.log(res.data))
    .catch(error=>console.log(error))
}