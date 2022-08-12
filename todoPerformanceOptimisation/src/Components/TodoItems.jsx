import React from 'react'

const TodoItems = ({id, title, status}) => {
  return (
    <div>
        <div style={{display:"flex",gap: "10px", justifyContent:"center", alignItems:"center"}}>
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{status ? "done" : "Not Done"}</p>
        </div>
    </div>
  )
}

export default TodoItems