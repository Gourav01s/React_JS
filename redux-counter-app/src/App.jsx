import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'


function App() {

  return (
    <>
      <h1 className=''>hello project</h1>
      <Counter />
      
      {/* Panding is :
        import Provider from react-redux in main.jsx
        then 
        apply useSelector() and useDispatch() hook in counter.jsx 
        and onClick function on buttons
       */}
    </>
  )
}

export default App
