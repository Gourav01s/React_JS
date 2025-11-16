import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashbard from './pages/Dashboard'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false); 

  return (
    <>
      {/* <h1>hello project</h1> */}
      <div className=" h-screen bg-richblack-900 flex flex-col ">
        <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        

        <Routes>
          <Route path='/' element={<Home isLoggedin={isLoggedin } />} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedin}/>} />
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedin} />} />
          <Route path='/dashboard' element={
            <PrivateRoute isLoggedin={isLoggedin}>
              <Dashbard />
            </PrivateRoute>
          } />
        </Routes>
      </div>

    </>
  )
}

export default App
