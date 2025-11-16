import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "WtJsbO8iY5PRgkHME1EOQ8YpI7tSwxj2";
const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);
    
    
    async function fetchData(tag) {
        setLoading(true);
        const url = tag ? `${gifUrl}&tag=${tag}` : gifUrl 
        const {data} = await axios.get(url);
        // console.log(output);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, []);

    return {gif, loading, fetchData};

     
}

export default useGif