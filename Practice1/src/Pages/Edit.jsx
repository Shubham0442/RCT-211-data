import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { getMusicRecord, update } from '../AppReducer/appActions'


const Edit = () => {
  const {id} = useParams()
  const [ singleRecord, setSiggleRecord ] = useState({}) 
  const [ name, setName ] = useState("")
  const [ artist, setArtist ] = useState("")
  const navigate= useNavigate()

  const record = useSelector((state)=>state.appReducer.musicRecords)
  const dispatch = useDispatch()
   
  console.log(record)

//   useEffect(()=>{
//     if(record.length === 0){
//       dispatch(getMusicRecord())
//     }
//   },[dispatch, record.length])

const handleEdit = (e)=>{
    e.preventDefault() 
 dispatch(update(id, {name: name, artist: artist }))
  .then((res)=>{
     if(res.type === "EDIT_MUSIC_RECORDS_SUCCESS")
     {
         dispatch(getMusicRecord())
         navigate(`/musicRecord/${id}`)
     }
  })

}

  useEffect(()=>{
      
    if(id){
      const requirdRecord = record.find((elem)=>elem.id === id) 

       if(requirdRecord){
          setName(requirdRecord.name)
          setArtist(requirdRecord.artist)
       }
    }

  }, [id, record])

 

  return (
    <div>
        <h1>Edit</h1>
        <form onSubmit={handleEdit}>
            <div>
                <h4>Edit album name</h4>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <h4>Edit album name</h4>
                <input type="text" value={artist} onChange={(e)=>setArtist(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Update"/>
            </div>
        </form>
    </div>
  )
}

export default Edit