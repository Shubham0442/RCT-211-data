import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { getMusicRecords } from '../Redux/action'
import { useSearchParams, useLocation, Link} from "react-router-dom"

const MusicRecords = () => {

    const dispatch = useDispatch()
    const record = useSelector((state)=>state.reducer.mucicRecords)
    const [ searchParams ] = useSearchParams();
    const location = useLocation()

    useEffect(()=>{

      const sort = searchParams.get("_sort")
      if(location || record.length === 0){

        const query = {
           params:{
            genre: searchParams.getAll("genre"),
            _sort: sort && "year",
            _order: sort
           }
           
        }
        dispatch(getMusicRecords(query))
      }
    }, [location.search])

    //console.log(state)
  return (
    
    <div>
        { record.length > 0 && 
          record.map((elem)=>(
            
            <div key={elem.id} >
              <Link to={`/music/${elem.id}`}>
                <h4>{elem.name}</h4>
                <img src={elem.img} alt="pic" />
                <p>{elem.year}</p>
              </Link>
            </div>
             
          ))
        
        }
    </div>
   
  )
}

export default MusicRecords