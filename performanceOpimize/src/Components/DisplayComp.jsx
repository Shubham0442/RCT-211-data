import React from 'react'

const DisplayComp = ({id, title, body, verifyPost, handleVerify}) => {
  return (
    <div>
         <h4>{title}</h4>
         <p>{body}</p>
        <button onClick={()=>handleVerify(id)}>{verifyPost ? "Verified": "Not Verified"}</button>
    </div>
  )
}

export default React.memo(DisplayComp)