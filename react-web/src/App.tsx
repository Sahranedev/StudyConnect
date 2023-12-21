
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './comps/Navigation/NavBar';


function App() {

  return (
    <>
      <div className='pb-[5.5rem]'>

      <Outlet />
      </div>
      <NavBar />

    </>
  )
}

export default App
