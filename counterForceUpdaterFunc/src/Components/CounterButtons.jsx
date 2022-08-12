import React from "react";
import { store } from "../Redux/store";
import { handleADD, handleREDUCE } from "../Redux/action";

const CounterButtons = () => {
  const { dispatch } = store;
  
  return (
    <div>
      <button
        onClick={() => {
           dispatch(handleADD())
        }}
      >
        ADD
      </button>
      <button onClick={() => {
        dispatch(handleREDUCE())
      }}
      >
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
