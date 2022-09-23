import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'

const PrivateRoute = ({ token, children }) => {
    console.log(token, children)
  return token ? children : <Navigate to="/login" />
}

export const Router = () => {
  const  token  = useSelector(state=>state.authReducer.token);

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
    </Routes>
  )
}
