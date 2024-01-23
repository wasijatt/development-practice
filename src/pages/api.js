import React from 'react';
import React, { useEffect, useState } from 'react'

export default function api() {
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const[loding , setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async() => {
            try{
                const respone  = await fetch("https://goweather.herokuapp.com/weather/ny")
                const result = await respone.text();
                setData(result);
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)

            }
        }
        fetchData();
    },[]);

    if (loading){
       return
        <p>this is loading </p>
    }
    if (error){
        return
        <p>Error:{error.message}</p>
    }
  return (
    <div>
        <p>data:{data}</p>
    </div>
  )
}
