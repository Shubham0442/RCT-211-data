import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// const Auth = JSON.parse(localStorage.getItem('Auth')) || {};

// console.log(Auth.isAuth)


const PrivatedRoute = ({children}) => {

    const Auth = useSelector((state)=>state.authReducer.auth.isAuth)
    //console.log(Auth)

    if(Auth === false)
    {
       return <Navigate to="/login"/>
    }
    else{

       return children
    }
     
}

export default PrivatedRoute