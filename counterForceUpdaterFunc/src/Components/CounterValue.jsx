import React, {useState} from 'react'
import {store} from "../Redux/store"

const CounterValue = () => {

  const [state, setState] = useState(0);
  
  const forceUpdate = () => setState((prev) => prev + 1);

    const {count} = store.getState()
    store.subscribe(() => {
      forceUpdate();
    });

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default CounterValue