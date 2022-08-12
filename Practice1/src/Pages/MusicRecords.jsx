import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicRecord } from '../AppReducer/appActions'
import style from "../Components/musicRecords.module.css"
import { useSearchParams, useLocation, Link } from "react-router-dom"


const MusicRecords = () => {
 
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  const [searchParams] = useSearchParams()
  const location  = useLocation()
  
  console.log(state)
  //console.log(location)

  useEffect(()=>{

    const sort = searchParams.get("year")

    //console.log(sort)
    if(location || state.appReducer.musicRecords.length === 0){
      let query= {
        params:{
            genre: searchParams.getAll("genre"),
            _sort: sort && "year",
            _order: sort
        }
      }

      dispatch(getMusicRecord(query))
    }
     
      
     
  }, [location.search])

 
  return (
    <div className={style.recordsContainer}>
             { state.appReducer.isLoading && <h2>Loading...</h2>}
             { state.appReducer.isError && <h2>Something went wrong...</h2>}
             {
               state.appReducer.musicRecords.length > 0 && 
               state.appReducer.musicRecords.map((elem)=>(
                  <div key={elem.id}>
                    <Link to={`/musicRecord/${elem.id}`}>
                    <h4>{elem.name}</h4>
                    <img src={elem.img} alt="pic" />
                    <p>{elem.genre}</p>
                    <p>{elem.year}</p>
                    </Link>
                  </div>
               ))
             }
    </div>
  )
}

export default MusicRecords