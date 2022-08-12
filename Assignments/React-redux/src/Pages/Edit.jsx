import React, {useState} from 'react'
import { useParams, useNavigate} from "react-router-dom" 
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateTitle } from '../Redux/action'

const Edit = () => {
    const {id} = useParams()
    const [ newTitle, setnewTitle] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const handleUpdate = (newTitle) =>{
     
        axios.patch(`http://localhost:4000/todos/${id}`,{
          title: newTitle
        })
            .then((res)=>{
              console.log(res.data)
              dispatch(updateTitle(res.data))
              alert("Title updated")
              navigate('/')
            })
            .catch((error)=>{
              console.log(error)
            })
      }
  return (
    <div>
        <h1>Update Title</h1>
        <hr />
        <div>
              <input type="text" placeholder='Change title' value = {newTitle} onChange = {(e)=>setnewTitle(e.target.value)}/>
        </div>
            <button onClick = {()=>handleUpdate(newTitle)}>UPDATE</button>
    </div>
  )
}

export default Edit