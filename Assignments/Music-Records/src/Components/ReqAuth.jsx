import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const ReqAuth = ({children}) => {
    const Auth = useSelector((state)=>state.authReducer.isAuth)
    const location = useLocation()

if(!Auth)
{
    return <Navigate to="/login" state={{from: location}} replace/>
}
  return children
}

export default ReqAuth