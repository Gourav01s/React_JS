import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// Step:1
export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();


    // Data fatching
    const fetchBlogPosts = async (category, tag = null, page = 1) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            if (!data.posts || data.posts.length === 0) {
                throw new Error("Somthing is wrong for api url");
            }
            console.log("Api response:", data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log("Error h", error);
            
            // setPage(1);
            // setPosts([]);
            // setTotalPages(null);
        }

        setLoading(false);
    };


    //  function to handle clicks on Next and Previous button
    function handlerPageChange(page) {
        navigate({ search: `?page=${page}` });
        setPage(page);
        // fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchBlogPosts
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    
}

export default AppContextProvider;