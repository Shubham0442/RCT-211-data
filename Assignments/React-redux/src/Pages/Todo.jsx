import axios from "axios";
import { Link } from "react-router-dom"
import React, { useEffect } from "react";
import TodoInput from "../Components/TodoInput";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getTodoSuccess, getTodoLoading, getTodoError, deleteTodo, toggleStatus } from "../Redux/action";

const Todo = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.todos);
    const loading = useSelector((state)=> state.isLoading) 

    const getTodo = () => {
        dispatch(getTodoLoading());
    
        axios
          .get(`http://localhost:4000/todos`)
          .then((res) => {
            //console.log(res.data)
            dispatch(getTodoSuccess(res.data));
          })
          .catch((error) => {
            console.log(error.message)
            dispatch(getTodoError());
          });
      };
    
      const handleDelete = (id) =>{
       
        axios.delete(`http://localhost:4000/todos/${id}`)
        .then(()=>{
          axios.get(`http://localhost:4000/todos/`)
          .then((res)=>{
             console.log("delete fun", res.data)
             dispatch(deleteTodo(res.data))
          })
        })
        

      }
    
      const handleToggle = (id, status)=>{
         axios.patch(`http://localhost:4000/todos/${id}`,{
          status
         })
         .then(()=>{
          axios.get(`http://localhost:4000/todos/`)
          .then((res)=>{
             console.log("toggle fun", res.data)
             dispatch(toggleStatus(res.data))
          })
          
         })
        
      }
    
    
      useEffect(() => {
        getTodo();
      }, []);
    
      console.log(data);
      console.log(loading);

  return (
    <div>
        <h1>Todo</h1>
        <hr />
      <TodoInput getTodo={getTodo} />

      <div style={{width:"100%", margin: "auto"}}>
      {
        loading && <div>Loading.....</div>
      }
      {data.map((elem) => (
        <div 
        key={elem.id}
        style={{ width:"60%", display:"flex", margin:"auto", alignItems: "center", gap:"10px", justifyContent:"center"}}
        >
          <h5>{elem.title}</h5>
          <div>
           <button onClick={()=>handleToggle(elem.id, !elem.status)}>{elem.status ? "Done": "Not Done"}</button>
          </div>
          <div>
              <button onClick={()=>handleDelete(elem.id)}>Delete</button>
          </div>
          <p><Link to={`/todo/${elem.id}`}>See More</Link></p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Todo