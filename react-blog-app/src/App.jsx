import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'


function App() {

  const { fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
    console.log('fetchblog called');
  }, []);

  return (
    <>
      {/* <h1>hello project</h1> */}
      

      <div className="w-full h-full flex flex-col items-center justify-center gap-x-3">
        <Header />
        <Blogs />
        <Pagination/>
      </div>
    </>
  )
}

export default App
