import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccessAction, loginFailureAction } from '../AuthRedux/authAction'

const Login = () => {

    const [ form, setForm ] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })

    const dispatch = useDispatch()
    const state = useSelector((state)=>state)
    const navigate = useNavigate()


    const handleChange = (e) =>{
          let { name, value } = e.target 

          setForm({
            ...form,
            [name] : value
          })
    }

    const handleSubmit = (e) =>{

        e.preventDefault() 

        axios.post(`https://reqres.in/api/login`,{
          email: form.email,
          password: form.password
        })
        .then((res)=>{
             //console.log(res.data)
             dispatch(loginSuccessAction(res.data.token))
             navigate("/")
        })
        .catch((error)=>{
            console.log(error)
            dispatch(loginFailureAction())
        })
    }


    console.log("Auth", state)
  return (
    <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" name = "email" placeholder='enter email' value = {form.email} onChange={handleChange} />
            </div>
            <div>
                <input type="password" name = "password" placeholder='enter password' value = {form.password} onChange={handleChange} />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
  )
}

export default Login