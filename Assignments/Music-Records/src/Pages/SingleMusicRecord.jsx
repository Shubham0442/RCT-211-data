import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getMusicRecords } from '../Redux/action'

const SingleMusicRecord = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const MusicRecords = useSelector((state)=> state.reducer.mucicRecords)
  const [ currentAlbum, setCurrentAlbum ] = useState({}) 
  
  
  useEffect(()=>{

    if(MusicRecords.length === 0){
      dispatch(getMusicRecords())
    }

  },[dispatch, MusicRecords.length])
  
  useEffect(() => {

    //console.log(MusicRecords)
    
    if(id){
      const currentAlbumMusic = MusicRecords.find((album)=>album.id === id)
      currentAlbumMusic && setCurrentAlbum(currentAlbumMusic)
     // console.log(currentAlbumMusic)
    }
    
  }, [id, MusicRecords])
  
  console.log(currentAlbum?.songs)


  return (
    <div>
         <h3>{currentAlbum.name}</h3>
         <img src={currentAlbum.img} alt="pic" />
         <h3>{currentAlbum.artist}</h3>
         <p>{currentAlbum.genre}</p>
         <h6>{currentAlbum.year}</h6>
        { 
          currentAlbum?.songs?.length > 0 &&
          currentAlbum.songs.map((elem)=>(
            <div key={elem.id}>
              <figure>
                <audio
                    controls
                    src={elem.name} type="audio/mp3">
                </audio>
              </figure>
            </div>
          ))
        }
       <div>
          <Link to={`/music/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
    </div>
  )
}

export default SingleMusicRecord