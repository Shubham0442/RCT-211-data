import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams} from "react-router-dom" 
import { useDispatch, useSelector} from "react-redux"
import { getWatchData } from "../Redux/AppReducer/action";

const SingleWatch = () => {
    

  const {id} = useParams()
  const watch = useSelector((state)=>state.appReducer.watches) 
  const dispatch = useDispatch()
  const [ single, setSingle ] = useState({})
  

  useEffect(()=>{
    if(watch.length === 0)
    {
      dispatch(getWatchData())
    }
  },[watch.length, dispatch])
   
//console.log(watch)
  useEffect(()=>{
    if(id){
      let newSingle = watch.find((elem)=>elem.id === id)
      newSingle && setSingle(newSingle)
    }
  }, [id, watch])

  console.log(single)

  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src="watch-image" alt="Cover Pic" />
      </div>
      <div>
        <div>Watch Category</div>
      </div>
    </div>
  );
};

export default SingleWatch;
