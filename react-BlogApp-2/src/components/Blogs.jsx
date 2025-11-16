import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

    const { loading, posts } = useContext(AppContext);
    console.log(posts);


   return (
       <div className='flex flex-col gap-y-10 my-4'>
           {loading ? (
               <Spinner/>
           ) : posts.length === 0 ? (
                <div className='min-h-[80vh] w-full justify-center items-center'>
                       <p className='text-center font-bold text-3xl '>No Post found "Blogs"</p>
                </div>
           ) : (
                posts.map((post) => {
                    return <BlogDetails key={post.id} post={post } />
                })
           )
               
           }
       </div>
   )
};

export default Blogs
