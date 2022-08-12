import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { login } from "../Redux/AuthReducer/action";
import { useNavigate, useLocation} from "react-router-dom"

const Login = () => {

  const [ form, setForm ] = useState({
    email:"eve.holt@reqres.in",
    password: "cityslicka"
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  //const commingFrom = location?.state?.from?.pathname || "/"

 

  const handleChange = (e)=>{
      let { name, value} = e.target 

      setForm({
        ...form,
        [name]:value
      })
  }

  const handleSubmit = (e)=>{
     
    e.preventDefault()
     
    dispatch(login({
      email: form.email,
      password: form.password
    }))
    .then((res)=>{
      if(res.type==="LOGIN_SUCCESS")
      {
          navigate("/")
      }
    })

  }
  console.log(location)


  return (
    <div style={{width: "100%", margin: "auto", textAlign:"center"}}>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" type="email" value={form.email} onChange={handleChange}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" type="password" value={form.password} onChange={handleChange}/>
        </div>
        <button type="submit" data-testid="login-submit" value="Login">
         Login
        </button>
      </form>
    </div>
  );
};

export default Login;
