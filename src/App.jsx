import { useState } from 'react'
import './App.css'


function App() {
  const [data,setData] = useState("")
  const [search, setSearch] = useState('')

  const loader = () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=2f0372b54122e78189da7ca8a1766bd7`)
    .then(response => response.json())
      .then(data => setData(data));
      console.log(data)
  }


  return (
   <div className='container'>
    <h1>VEJA O CLIMA EM TEMPO REAL</h1>
    <input type="text" 
    placeholder='digite aqui...'
    onChange={(e)=>setSearch(e.target.value)}
    />
    <button onClick={loader}><strong>BUSCAR</strong></button><br />

    <div className="children">
    <h1>{data.name}</h1>
    <h2>{data.main ? <h2>TEMPERATURA:{data.main.temp}ºF</h2> : null}</h2>
    <h3>{data.wind ? <h2>VELOCIDADE DO VENTO:{data.wind.speed}KM/H</h2> : null}</h3>
    <h4>{data.main ? <h2>HUMIDADE:{data.main.humidity}%</h2> : null}</h4>
    </div>

   </div>
  )
}

export default App
