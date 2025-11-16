
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Support from './components/Support'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MainHeader from './components/MainHeader'
import Labs from './components/Labs'


function App() {

  return (
    <>
      <h1>React Router leaning</h1>
      <h2>Routes, Route, index-Route, NavLink with active-class, Outlet, Hook-useNavigate</h2>

      <div>

        <nav className='navlinks'>
          <ul>
            <li>
              <NavLink to='/' >Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' >About</NavLink>
            </li>
            <li>
              <NavLink to='/support' >Support</NavLink>
            </li>
            <li>
              <NavLink to='/labs' >Labs</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<MainHeader />}>
            {/* this will be the default path to be renderd */}
            <Route index element={<Home />} />
            
            <Route path="/support" element={<Support />} />
            <Route path='/about' element={<About />} />
            <Route path='/labs' element={<Labs/>} />
            <Route path='*' element={<NotFound />} />
          
          </Route>
          
        </Routes>
      </div>
    </>
  );
}

export default App
