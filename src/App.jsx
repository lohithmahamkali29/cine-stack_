import { useState } from 'react'  
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="main">
      <div className='first'>
        <img src="/logo.png" width="100" />
        <h1>CINESTACK</h1>
        <button id= "watchlist">Watchlist {num}</button>
        </div>
        <hr></hr>
        <br></br>
        <div className='second'>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        </div>
        <br></br>
        <br></br>
        <div className='third'>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>

        </div>
    </div>
  )
    
}

export default App
