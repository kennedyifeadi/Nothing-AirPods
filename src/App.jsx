import { useState, useEffect } from 'react'
import './App.css'
import airpodImage from './assets/images/nothingAirpod3.png'

function App() {
  const [ismounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)}, 4000)
  }, [])

  return (
    <div className="body">
      <div className={`initailLoadScreen ${ismounted ? "initailLoadScreenOutOfView" : ""}`}>
        <h1>NOTHING</h1>
      </div>
      <div className="main">
        <div className="testing">
          <img src={airpodImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
