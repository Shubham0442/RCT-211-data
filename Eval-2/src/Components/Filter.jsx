import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSearchParams } from "react-router-dom"
import { getWatchData } from "../Redux/AppReducer/action";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const dispatch = useDispatch()
  const [ searchParams, setSearchParams ] = useSearchParams() 
  const initCategory = searchParams.getAll("category")
  const [ category, setCategory ] = useState(initCategory || [])


  const handleFilter = (e)=>{
    let value = e.target.value 

        const  newCategory = [...category] 

        if(category.includes(value)){
          newCategory.splice(newCategory.indexOf(value),1)
        }
        else{
          newCategory.push(value)
        }
      setCategory(newCategory)

  } 

  useEffect(()=>{
     
    if(category)
    {
      let params = {};
      category && (params.category = category)

       setSearchParams(params)
       dispatch(getWatchData(searchParams))
    }
  }, [category, setSearchParams])





  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleFilter} defaultChecked={category.includes("Analog")}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleFilter} defaultChecked={category.includes("Digital")}/>
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleFilter} defaultChecked={category.includes("Chronograph")}/>
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
