import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { ManageProfile } from './Pages/ManageProfile'
import { Register } from './Pages/Register'
import { getData } from './Redux/Auth/action'

const PrivateRoute = ({ token, children }) => {
    console.log(token, children)
  return token ? children : <Navigate to="/login" />
}

export const Router = () => {
    const dispatch = useDispatch();
  const  token  = useSelector(state=>state.authReducer.token);
  
  useEffect(()=>{
    token&&dispatch(getData(token));
  },[])
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute token={token}>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={token?<Navigate to="/"/>:<Login />} />
      <Route path="/register" element={token?<Navigate to="/"/>:<Register />} />
      <Route path="/manage-profile" element={token?<ManageProfile/>:<Navigate to ="/login"/>} />
    </Routes>
  )
}
