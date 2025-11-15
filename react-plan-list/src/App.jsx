import { useState } from 'react'
import './App.css'
import Data from './data'
import Tours from './components/Tours'

function App() {
  const [tours, setTours] = useState(Data);

  function removeTourHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(Data)}>
          Refresh
        </button>
      </div>
    );
  }

  
  return (
    <>
      <h1>A Project</h1>
      <Tours tours={tours} removeTour={removeTourHandler}> </Tours>
    </>
  );
}

export default App
