
import './App.css'
import airpodImage from './assets/images/nothingAirpod3.png'

function App() {

  return (
    <div className="body">
      <div className="initailLoadScreen">
        <h1>NOTHING</h1>
      </div>
      <div className="main">
        <div className='testing'>
          <img src={airpodImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
