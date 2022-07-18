import React, { useEffect, useState} from 'react';
import "./App.css";

function App() {
  const [data, setdata]= useState([]);
  const getdata= async () => {
    
    try{
      const res=await fetch("https://data.covid19india.org/data.json");
      const actualdata= await res.json();
      setdata(actualdata.statewise[0]);
       } catch(err) {
        console.log(err);
       }
  }

  useEffect(()=>{
   getdata();
  },[])

  return(
    
<div className='app'>
  
  <div className='header'><h1>Covid19 Tracker</h1>
  <h3>🔴Live🔴</h3></div>
  
<div className='grid'>
            <div className='card1'>
            <br></br>
            <br></br>
              <h1>COUNTRY</h1>
              <h2>India</h2>
            </div>
            <div className='card2'>
            <br></br>
            <br></br>
              <h1>CONFIRMED</h1>
              <h1>{data.confirmed}</h1>
            </div>
            <div className='card3'>
            <br></br>
            <br></br>
              <h1>RECOVERED</h1>
              <h1>{data.recovered}</h1>
            </div>
            <div className='card4'>
            <br></br>
            <br></br>
              <h1>DEATH</h1>
              <h1>{data.deaths}</h1>
            </div>
            <div className='card5'>
            <br></br>
            <br></br>
              <h1>ACTIVE</h1>
              <h1>{data.active}</h1>
            </div>
            <div className='card6'>
            <br></br>
            <br></br>
              <h1>UPDATED</h1>
              <h1>{data.lastupdatedtime}</h1>
            </div>
            

      </div>
</div>
      
  )  
}

export default App;