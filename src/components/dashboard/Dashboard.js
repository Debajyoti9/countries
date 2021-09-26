import React, { useEffect, useState } from 'react'
import CountryCard from '../countries/CountryCard';
import '../dashboard/Dashboard.css';
import axios from 'axios';
function Dashboard() {

    const [countries,setCountries] = useState([]);
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            const request = await axios.get('https://restcountries.com/v3/region/Asia');
            setCountries(request.data);
            setLoading(false);
        }
        fetchData();
    },[]);
    if(loading){
        return <h1 className='bouncy'>Loading....</h1>
    }
    else{
    return (
        <>
        <h1>All Asian Countries</h1>
        <h4>(hover please for see the data)</h4>
        <div className="dashboard">
        {
           countries.map((country)=>(
             <CountryCard  name ={country.name.common} capital={country.capital[0]} flag={country.flags[0]} region={country.region} subRegion={country.subregion} borders={country.borders} languages={country.languages} population="not exist in this api" key={country.area}/> 
            
           ))
        } 
        </div>
        </>
    )
    }
}

export default Dashboard;
