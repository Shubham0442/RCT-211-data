import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {

const navigate = useNavigate()

    const handleNavigate =()=>{
      navigate("/")
    }

  return (
    <div>
         <button onClick={handleNavigate}>Go to Home</button>
         <div>
            <img style={{width: "80%"}} src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1" alt="404" />
         </div>
    </div>
  )
}

export default ErrorPage