import {  useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState();
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setLoading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is");
        console.log(url);
        
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("Error in fetch relatedblogs");
            console.log(error);
            setBlog([]);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

   return (
       <div>
           <Header />
           <div className=" mt-[5rem]">
               <button onClick={()=> navigation(-1)}>
                   Back
               </button>
           </div>
           <div>
               
            {loading ? (
                <p>Loading...</p>
            ) : blog ? (
                    <div>
                        <BlogDetails posts={blog} />
                        <h2 className="text-3xl font-bold my-2">Related Blogs</h2>
                        {relatedBlogs.map((post) => (
                            <div key={post.id}>
                                <BlogDetails post={post}/>
                            </div>
                        ))}
                        </div>
                ) : (
                    <div className="flex flex-col items-center">
                    <p className="font-bold text-4xl">No Blog Found</p>
                </div>          
            )
            }
           </div>
           
       </div>
   )
};

export default BlogPage;
