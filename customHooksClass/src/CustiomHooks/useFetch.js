import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
      
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState([]) 
    const [ error, setError] = useState(false)

    const fetchData = (url)=>{
         
        setLoading(true)
        axios.get(url)
        .then((res)=>{
            setData(res.data.data)
            console.log(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(true)
            setLoading(false)
        })
    }

    useEffect(()=>{
          fetchData(url)
    },[])

  return { loading, data, error}

  
}

export default useFetch