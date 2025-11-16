import { createContext, useState } from "react";
import axios from "axios";
import { baseUrl }  from '../baseUrl'

// step: 1
export const AppContext = createContext();

function AppContextProvider({ childern }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null); 

    //  Data fill from API
    async function fetchBlogPosts(page = 1) {
        console.log('inside fetch blog');
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        // let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        try {
            // const result = await axios.get(url);
            // console.log(result);
            let output = await fetch(url);
            let result = await output.json();
            console.log(result);
            setPage(result.page);
            setPosts(result.posts);
            setTotalPages(result.totalPages);
        }
        catch (error) {
            console.log('There is error in fetch blog ${error}');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }


    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        posts, setPosts,
        loading, setLoading,
        page, setPage,
        totalPages, setTotalPages,
        fetchBlogPosts, handlerPageChange 
    };
    

    // step:2
    return <AppContext.Provider value={value}>
        {childern}
    </AppContext.Provider>
}

export default AppContextProvider;