import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails"
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedblog, setRelatedblog] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { loading, setLoading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    // fetch function 
    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedblog(data.relatedBlogs);

        } catch (error) {
            console.log(error);
            setBlog(null);
            setRelatedblog([]);
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
                <Header/>
                <div>
                    { <button onClick={()=> navigate(-1)}>
                            Back
                        </button>
                    } 
                </div>
                <div>
                {loading ? (
                    <p>Loading...</p>
                ) : blog ? (
                        <div>
                            <BlogDetails post={blog} />
                            <h2>Related Blogs</h2>
                            {relatedblog.map((post) => (
                                <div key={post.id}> 
                                    <BlogDetails post={post } />
                                </div>
                            )) 
                            }
                        </div>
                    ) : (
                        <p>No Blog Found "BlogPage"</p>
                    )
                }
                </div>
        </div>
    )
};

export default BlogPage
