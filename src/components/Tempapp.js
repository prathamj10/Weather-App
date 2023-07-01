import React,{useState,useEffect} from 'react'
import './css/style.css';
const Tempapp=()=> {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Delhi");
    useEffect(()=>{
      const fetchApi= async ()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=64fe109f99e9f0f7e292fa57fe7ec303`
        const response=await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
      }
      fetchApi();
    },[search])
  return (
    <>
        <div className='box'>
        <div className='inputData'>
            <input type='search' className='inputField' value={search} onChange={(event)=>{  setSearch(event.target.value)}}/>
        </div>
    {
      !city?(
        <p>No Data Found</p>
      ):(
        <div>
        <div className='info'>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>
        {city.temp}
        </h1>
        <h3 className='tempmin_max'>Min : {city.temp_min}Cel | Max : {city.temp_max} Cel</h3>
        </div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        </div>
      )
    } 
        </div>
    </>
  )
}

export default Tempapp