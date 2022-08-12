import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { getMusicRecord } from '../AppReducer/appActions'

const SingleMusicRecords = () => {


  const {id} = useParams()
  const [ singleRecord, setSiggleRecord ] = useState({}) 
  const record = useSelector((state)=>state.appReducer.musicRecords)
  const dispatch = useDispatch()
   
  console.log(record)

  useEffect(()=>{
    if(record.length === 0){
      dispatch(getMusicRecord())
    }
  },[dispatch, record.length])

  useEffect(()=>{
      
    if(id){
      let requirdRecord = record.find((elem)=>elem.id === id) 
       requirdRecord && setSiggleRecord(requirdRecord)
    }

  }, [id, record])

 console.log("singleRecord",singleRecord)

  return (
    <div>
      <h4>Single Music Records</h4>
      <div>
        <h3>{singleRecord.name}</h3>
        <img src={singleRecord.img} alt="pic" />
        {
          singleRecord?.songs?.map((elem)=>(
            <div>{elem.name}</div>
          ))
        }
      </div>
      <Link to={`/musicRecord/${singleRecord.id}/edit`}>
      <button>Edit</button>
      </Link>
    </div>
  )
}

export default SingleMusicRecords