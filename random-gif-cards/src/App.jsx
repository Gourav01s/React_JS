import { useState } from 'react'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'


function App() {

  return (
    <>
      <h1 className='bg-gray-400 rounded-sm '>hello project</h1>
      <div className='w-full h-screen flex flex-col background '>
        <h1 className=' bg-gray-400 rounded-sm  text-center mt-[40px] 
         px-2 py-2 text-xl'>RANDOM GIFS</h1>
        
        <div className='w-full flex flex-col gap-y-3 items-center'>
        <Random />
        <Tag/>
        </div>
      </div>
    </>
  )
}

export default App
