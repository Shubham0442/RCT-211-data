import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginFailureAction } from '../AuthRedux/authAction'

const Navbar = () => {


    const Auth = useSelector((state)=>state.authReducer.auth.isAuth)
    console.log(Auth)
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch (loginFailureAction())
    }

  return (
    <div style={{width: "60%", margin:"auto", display:"flex", gap:"20px", justifyContent:"center", alignItems:"center"}}>
        <Link to ="/">Home</Link>

        {
            Auth ? <button onClick={handleLogout}>Logout</button> : <Link to ="/login">Login</Link>
        }
        
        
    </div>
  )
}

export default Navbar