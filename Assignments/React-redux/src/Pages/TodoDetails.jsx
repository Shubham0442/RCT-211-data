import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams, useNavigate} from "react-router-dom" 
import { Link } from "react-router-dom"

const TodoDetails = () => {

  const [ myData, setMyData] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
     if(id)
     {
        axios.get(`http://localhost:4000/todos/${id}`)
        .then((res)=>{
          setMyData(res.data)
        })
        .catch((error)=>{
          console.log(error)
          navigate("/error")
        })
     }
  }, [])

 


  return (
    <div>
      <h1>Todo Details</h1>
      <hr />
      <div>
            <h3>{myData.title}</h3>
            <p>{myData.status ? "Done" : "Not Done"}</p>
            <p><Link to={`/todo/${myData.id}/edit`}>Edit Data</Link></p>
      </div>
    </div>
  )
}

export default TodoDetails