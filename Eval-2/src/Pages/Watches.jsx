import React from "react";
import Filter from "../Components/Filter";
import { useSelector, useDispatch  } from "react-redux/es/exports";
import { useEffect } from "react";
import { getWatchData } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import { useSearchParams, useLocation, Link} from "react-router-dom"
 
const Watches = () => {

   const watchData = useSelector((state)=>state.appReducer.watches)
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams()
   const location = useLocation()

   useEffect(()=>{

    if(location || watchData.length === 0)
    {
      let query = {
        params:{
          category: searchParams.getAll("category")
        }
      }

      dispatch(getWatchData(query))
    } 
   },[location.search])

   //console.log(watchData)

  return (
    <div style={{display: "flex", width: "90%", margin:"auto", justifyContent:"space-around"}}>
     
      <Filter />
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px", width: "80%"}}>
        {/* Map through the watch list here using WatchCard Component */}
        {
          watchData.length > 0 && 
          watchData.map((elem)=>(
            
            <WatchCard key={elem.id} id={elem}/>
           
          ))
      }
      </div>
    </div>
  );
};

export default Watches;
