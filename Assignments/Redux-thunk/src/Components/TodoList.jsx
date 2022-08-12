import React from 'react'
import { useSelector } from 'react-redux'
const TodoList = () => {

    const state = useSelector((state)=>state)
    console.log(state)

    

  return (


    <div>
        {
           state.todoData.map((elem)=>(
            <div key={elem.id} style={{width: "40%", margin:"auto", border: "2px solid red", marginTop:"15px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <h4>{elem.title}</h4>
                <div>
                    <button>{elem.status ? "DONE" : "NOT DONE"}</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
           ))
          }
    </div>
  )
}

export default TodoList