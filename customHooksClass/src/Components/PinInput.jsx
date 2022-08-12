import React, { forwardRef } from 'react'

const PinInput = forwardRef(({handleChange, backSpaceHandler}, ref) => {


    const handleKeyUp = (e)=>{
       console.log("keyup", e)
       if(e.keyCode === 8 && !e.target.value){
        backSpaceHandler(e)
       }
       else{
        handleChange(e)
       }
    }


  return (
    <>
        <input 
        onKeyUp={handleKeyUp}
        maxLength={1}
        ref={ref}
        

         />
    </>
  )
})

export default PinInput