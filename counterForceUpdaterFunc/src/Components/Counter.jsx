import React from 'react'
import CounterButtons from './CounterButtons'
import CounterValue from "./CounterValue"
const Counter = () => {
  
  return (
    <div>
        <h1>Counter</h1>
        <CounterValue/>
        <CounterButtons/>
    </div>
  )
}

export default Counter