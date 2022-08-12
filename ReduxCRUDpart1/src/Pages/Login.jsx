import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../AuthRedux/authAction'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Login = () => {

  const [form, setForm ] = useState({
    email: "eve.holt@reqres.in",
    password:"cityslicka"
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector((state)=>state)
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || "/"
  
  const handleChange = (e)=>{
    let { name, value } = e.target 
     
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
       
      if(res.type === "USER_LOGIN_SUCCESS")
      {
        navigate(comingFrom, {replace: true})
      }
     })
  }

  console.log(state)
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
          <div>
            <input type="email" name="name" onChange = {handleChange} value = {form.email} />
          </div>
          <div>
            <input type="password" name="password" onChange = {handleChange} value = {form.password} />
          </div>
          <div>
            <input type="submit" value = "Login" />
          </div>
      </form>
    </div>
  )
}

export default Login