import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { login } from '../AuthReducer/authActions'
import { useNavigate, useLocation } from "react-router-dom"

const Login = () => {

    const [ form, setForm ] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }) 

    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location  = useLocation()
    const comingFrom = location?.state?.from?.pathname || "/"

    console.log(location)

    const handleChange = (e)=>{
        let {name, value} = e.target 

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(login({
            email: form.email,
            password: form.password
        }))
        .then((res)=>{
            if(res.type==="LOGIN_SUCCESS"){
               navigate(comingFrom, { replace: true})
            }
        })
    }
    console.log(state)

  return (
    <div>
        <h2>Login</h2>
           <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
           </form>
    </div>
  )
}

export default Login