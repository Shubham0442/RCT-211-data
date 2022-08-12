import React, {  useRef, useState } from 'react'
import PropTypes from "prop-types"
import PinInput from './PinInput'

const Pin = ({length, setOtp}) => {

    const [ inputLength ] = useState(new Array(length).fill(1))
    const [ inputData ] = useState(new Array(length).fill(""))
    const inputRef = useRef([])


    const handleChange =(e, index)=>{

        console.log(e.target.value)
        inputData[index] = e.target.value
        if(e.target.value.length > 0 &&index < length-1){
            inputRef.current[index+1].focus();
        }
          setOtp(inputData.join(" "))
    }

    const backSpaceHandler = (e, index) =>{
        if(index > 0)
        {
            inputRef.current[index -1].focus()
        }
        inputData[index] = e.target.value
        setOtp(inputData.join(" "))
    }
    // useEffect(()=>{
       
    // },[])


    const handlePaste = () =>{
         
    }


  return (
    <div>
        <h3>Pin</h3>
        <div onPaste={handlePaste}>
            {
                inputLength.map((_, index)=>{
                return <PinInput
                backSpaceHandler = {(e)=>backSpaceHandler(e, index)}
                 handleChange={(e)=>handleChange(e, index)}
                 key = {index}
                 ref={(ele)=>{
                    console.log(ele)
                    inputRef.current[index] = ele
                  }}

                 />
        })}</div>
       
    </div>
  )
}

export default Pin 

Pin.propTypes = {
   length: PropTypes.number.isRequired,
   setOtp: PropTypes.func
}