import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { editData, getMusicRecords } from '../Redux/action'
import { useNavigate } from "react-router-dom";

const EditMusicRecord = () => {
   
  
  const {id} = useParams()
  const dispatch = useDispatch()
  const MusicRecords = useSelector((state)=> state.reducer.mucicRecords)
  const [ currentAlbum, setCurrentAlbum ] = useState({})
  const [ musicName, setMusicName ] = useState("")
  const [ artistName, setArtistName] = useState("")
  const [ cover, setCover ] = useState("")
  const navigate = useNavigate()

  const handleMusic = (e)=>{
    setMusicName(e.target.value)
  }

  const handleArtist = (e)=>{
    setArtistName(e.target.value)
  }

  const handlCover = (e)=>{
    setCover(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(editData(id, {name:musicName, artist: artistName, img:cover}))
    .then((res)=>{
      dispatch(getMusicRecords())
      navigate(`/music/${id}`)
    })
  }

  useEffect(() => {
    
    if(id){
      const currentAlbum = MusicRecords.find((album)=>album.id === id)
      if(currentAlbum)
      {
        setMusicName(currentAlbum.name)
        setArtistName(currentAlbum.artist)
        setCover(currentAlbum.img)
      }
    }

  }, [id, MusicRecords]) 

 console.log(currentAlbum)

  return (
    <div>
      <h2>Edit Music Record</h2>
      <div onSubmit={handleSubmit} >
        <form>
           <div>
            <p>Edit music name</p>
            <input type="text" value={musicName} onChange={handleMusic}/>
           </div>
           <div>
            <p>Edit Artist name</p>
            <input type="text" value={artistName} onChange={handleArtist}/>
           </div>
           <div>
            <p>Edit Cover Page image url</p>
            <input type="text" value={cover} onChange={handlCover}/>
           </div>
           <br />
           <div>
            <input type="submit" value="Update"/>
           </div>
        </form>
      </div>
    </div>
  )
}

export default EditMusicRecord