import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux/es/exports'
import { getMusicRecords } from '../Redux/action'
import { useSearchParams } from 'react-router-dom'
const FilterSort = () => {
  const [ searchParams, setSearchParams ] = useSearchParams() 

  const initSearchParams = searchParams.getAll("genre")
  const [ category , setCategory ] = useState(initSearchParams || [])

  const sortParms = searchParams.get("_sort")
  const [ _sort , set_sort ] = useState(sortParms || "")
  const dispatch = useDispatch()

  
   
    const handleChange = (e)=>{
      let value = e.target.value
      //   axios.get(`http://localhost:8080/albums?genre=${value}`)
      //   .then((res)=>{
      //        dispatch(getMusicRecords(res.data))
      //       //console.log(res.data)
      //       setCategory(res.data)
      //   })

    let newCategory = [...category]
     if(category.includes(value))
     {
       newCategory.splice(newCategory.indexOf(value), 1)
     }
     else{
      newCategory.push(value)
     }
     setCategory(newCategory)
   
  }

  const handleSort = (e) =>{
    set_sort(e.target.value)
  }

  useEffect(()=>{
     if(category || _sort)
     { 
      let parms = {};
        category && (parms.genre = category)
        _sort && ( parms._sort =_sort)
       setSearchParams( parms)
       dispatch(getMusicRecords(searchParams))
     }
  },[category, setSearchParams, _sort])

    //console.log(_sort)
  return (
    <div>
        <h3>Filters by Genre</h3>
         <div>
            <input 
              type="Checkbox" 
              defaultChecked = {category.includes("K-Pop")} 
              value = "K-Pop" 
              onChange={handleChange}
            />
           <label>K-Pop</label>
         </div>
         <div>
            <input 
              type="Checkbox" 
              defaultChecked = {category.includes("Country")} 
              value = "Country" 
              onChange={handleChange}
            />
           <label>Country</label>
         </div>
         <div>
            <input 
              type="Checkbox" 
              defaultChecked = {category.includes("Pop")} 
              value = "Pop" 
              onChange={handleChange}
            />
           <label>Pop</label>
         </div>
         <div>
            <input 
              type="Checkbox" 
              defaultChecked = {category.includes("Holiday")} 
              value = "Holiday" 
              onChange={handleChange}
            />
           <label>Holiday</label>
         </div>
         <div>
            <input 
              type="Checkbox" 
              defaultChecked = {category.includes("Heavy Metal")} 
              value = "Heavy Metal" 
              onChange={handleChange}
            />
           <label>Heavy Metal</label>
         </div>
         <div>
            <input 
              type="Checkbox" 
              defaultChecked = {category.includes("Singer/Songwriter")} 
              value = "Singer/Songwriter" 
              onChange={handleChange}
            />
           <label>Singer/Songwriter</label>
         </div>
         <h3>Sort According to Year</h3>
         <div onChange={handleSort}>
             <div >
                <input type="radio" value="asc" name="sortbyYear" defaultChecked={_sort === "asc"}/>
                <label >Ascending</label>
             </div>
             <div>
                <input type="radio" value="desc" name="sortbyYear" defaultChecked={_sort === "desc"}/>
                <label >Descending</label>
             </div>
         </div>
    </div>
  )
}

export default FilterSort