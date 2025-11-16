import { useEffect, useState } from 'react'
import './App.css'
import { apiUrl, filterData } from './data'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {toast} from 'react-toastify'

function App() {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      // now data is in obj form
      setCourses(output.data);
      
    } catch (error) {
      toast.error('there is error in fetch data');
    }

    setLoading(false);
  };

  useEffect(() => {
    // call function to fetch data
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div >

      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]' >
        {
          loading ? (
            <Spinner/>
          ) : (
            <Cards courses={courses} category={category } />
          )
        }
      </div>
    </>
  )
}

export default App
