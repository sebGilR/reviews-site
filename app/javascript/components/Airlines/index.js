import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    Axios.get('/api/v1/airlines.json')
      .then(res => {
        setAirlines(res.data.data)
      })
      .catch(res => console.log(res))
  }, [airlines.length]);

  const list = airlines.map(item => {
    return <li key={item.attributes.name+item.id}>{item.attributes.name}</li>
  })
  return (
    <>
      <header>
        <h1>
          Flight Reviews
        </h1>
        <p>Airline reviews.</p>
      </header>
      <div>Airlines view goes here</div>
      <div></div>
      <ul>
        {list}
      </ul>
    </>
  )
}

export default Airlines;