
import { useContext, useEffect } from 'react';
import './App.css'
import { Route, Routes, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import { AppContext } from './context/AppContext';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  const [serchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  useEffect(() => {
    // fetchBlogPosts();
    console.log("fetchBlog is called in useEffect");

    const page = serchParams.get('page') ?? 1;
    if (location.pathname.includes("tags")) {
      // tags page will be active
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname,location.search]);

  return (
    <>
      <h1>React Router leaning</h1>

      {/* <div className="w-full h-full flex flex-col items-center justify-center gap-x-3">
        <Header />
        <Blogs />
        <Pagination/>
      </div> */}

      <div className="w-full h-full flex flex-col items-center justify-center gap-x-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:blogId' element={<BlogPage />} />
          <Route path='/categories/:category' element={<CategoryPage />} />
          <Route path='/tags/:tag' element={<TagPage/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App
