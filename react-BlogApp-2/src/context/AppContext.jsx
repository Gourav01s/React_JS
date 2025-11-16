import {  createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
import { useNavigate } from "react-router-dom";

// step 1
export const AppContext = createContext();

export default function AppContextProvider( {children} ){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // fetch Blogs
    const fetchBlogPosts = async (page = 1, tag = null, category) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }

        try {
            let res = await fetch(url);
            let data = await res.json();
            if (!data.posts || data.posts.length === 0) {
                throw new Error("Somthing went wrong in data");
            }
            console.log("Api response :", data);

            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("error in facting blogPosts ", error);
            setPosts([]);
            setTotalPages(null);
            setPage(1);
            
        }

        setLoading(false);
    }

    // handle page change
    const handlePageChange = (page) => {
        navigate({ search: `?page=${page}` });
        setPage(page);
        // fetchBlogPosts(page);
    };

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

   return (
    <AppContext.Provider value={value}>
           {children}
    </AppContext.Provider>
   )
};

