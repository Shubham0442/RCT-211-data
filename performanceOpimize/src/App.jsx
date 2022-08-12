import React from "react"
import './App.css';
import { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import DisplayComp from './Components/DisplayComp';

const myData = 
[
  {
    id:1,
    title:"ReactJs",
    body:"abc",
    verifyPost: false
 }
]

function App() {

  const [ timer , setTimer] = useState(0)
  const [ data, setData ] = useState(myData)
  const ref = useRef(null)
  
  useEffect(()=>{
    //  let timerId = setInterval(()=>{
    //     setTimer((prev)=>prev + 1)
    //  }, 1000)

    //  return(()=>{
    //   clearInterval(timerId)
    //  })

  },[])

  const handleChange = (e) =>{
   let value = e.target.value 
   ref.current = value 
  }

  const handleAdd = ()=>{ 

    const payload = {
      
        title: ref.current,
        body:"abc",
        verifyPost: false
       }

     setData([...data, payload])
  }


 

  const handleVerify = useCallback((id) =>{
      let newData = data.map((elem) =>
      elem.id === id
        ? {
            ...elem,
            verifyPost: !elem.verifyPost
          }
        : elem
    );
    setData(newData);
  },[data])

  return (
    <div className="App">
      <h3>count: {timer}</h3>

      <div>
        <input type="text" ref={ref} onChange={handleChange} />
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div>
        {
          data.map((elem)=>{
            return <div key={elem.id}>
              <DisplayComp {...elem} handleVerify={handleVerify} />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
