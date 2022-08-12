import React, { useState, useEffect} from 'react'
import style from "./musicRecords.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from "react-router-dom"
import { getMusicRecord } from '../AppReducer/appActions'

const FilterSort = () => {

    const dispatch = useDispatch()
    const state = useSelector((state)=>state)
    const [ searchParams, setSearchParams ] = useSearchParams() 
    const initParams = searchParams.getAll("genre") 
    const initYear = searchParams.get("year")

    const [ Genre, setGenre ] = useState( initParams || [])
    const [ yearSort, setYearSort ] = useState( initYear || "")
    


    const handleFilter = (e)=>{
    
        let value = e.target.value
        
       let newGenre = [...Genre] 

       if(Genre.includes(value))
       {
         newGenre.splice(newGenre.indexOf(value),1)
       }
       else{
         newGenre.push(value)
       }

       setGenre(newGenre)
      
    }

 const handleSort = (e)=>{
    setYearSort(e.target.value)
 }


    //console.log(yearSort) 

    useEffect(() => {
      
        if(Genre || yearSort){
            let param = {}

            Genre && ( param.genre = Genre)
            yearSort && (param.year = yearSort )
            setSearchParams(param)
            dispatch(getMusicRecord(searchParams))
        }
    
        
      
    }, [Genre, yearSort, setSearchParams])
    

  return (
    <div className={style.filterContainer}>
        <h3>Filter by Genre</h3>
        <div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="K-Pop" defaultChecked={Genre.includes("K-Pop")}/>
                <label>K-Pop</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Pop" defaultChecked={Genre.includes("Pop")}/>
                <label>Pop</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Country" defaultChecked={Genre.includes("Country")}/>
                <label>Country</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Hard Rock" defaultChecked={Genre.includes("Hard Rock")}/>
                <label>Hard Rock</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Holiday" defaultChecked={Genre.includes("Holiday")}/>
                <label>Holiday</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Classical Crossover" defaultChecked={Genre.includes("Classical Crossover")}/>
                <label>Classical Crossover</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Singer/Songwriter" defaultChecked={Genre.includes("Singer/Songwriter")}/>
                <label>Singer/Songwriter</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Heavy Metal" defaultChecked={Genre.includes("Heavy Metal")}/>
                <label>Heavy Metal</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Rock" defaultChecked={Genre.includes("Rock")}/>
                <label>Rock</label>
             </div>
             <div>
                <input type="checkbox" onChange={handleFilter} value="Christmas" defaultChecked={Genre.includes("Christmas")}/>
                <label>Christmas</label>
             </div>
        </div>
        <h3>Sort by Year</h3>
        <div onChange = {handleSort}>
            <div>
                <input type="radio" value = "asc" name="year" defaultChecked={ yearSort === "asc"}/>
                <label>Ascending</label>
            </div>
            <div>
                <input type="radio" value = "desc" name="year" defaultChecked={ yearSort === "desc"}/>
                <label>Descending</label>
            </div>
        </div>
    </div>
  )
}

export default FilterSort