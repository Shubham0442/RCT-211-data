import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {

    const Auth = useSelector((state)=>state.authReducer.isAuth)
    const location = useLocation()
    
    if(!Auth){
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    else{
        return children
    }

}

export default PrivateRoute