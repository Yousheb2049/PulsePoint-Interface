import './App.css'
import Nav from "./Navbar"
import LeftBar from './assets/Column_Left'
import RigthBar from "./assets/Column_Right"

function App() {
  return (
    <div className='content'> 
      <LeftBar />
      <div>
        <Nav />
        {/* <Map /> */}
      </div>
      
      <RigthBar />
    </div>
  );
}

export default App
