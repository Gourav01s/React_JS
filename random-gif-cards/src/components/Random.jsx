import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = "WtJsbO8iY5PRgkHME1EOQ8YpI7tSwxj2";

const Random = () => {

    // Without customHook 

    // const [gif, setGif] = useState(null);
    // const [loading, setLoading] = useState(false);
    
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=pg`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // By using custom hook - useGif

    const { gif, loading, fetchData } = useGif();

    function clickHandler(event) {
        fetchData();
    }

    return <>
        <div className="w-1/2 bg-green-400 rounded-lg border border-black 
         flex flex-col items-center gap-y-5 mt-[15px] text-black">

            <h1 className="text-2xl font-bold uderline uppercase">Random gif </h1>

            {
                loading ? (<Spinner/>): (<img src={gif} alt="gif image" width="450px" />)
            }
            

            <button onClick={clickHandler}
            className="bg-yellow-400  text-2xl py-2 w-10/12 rounded-lg mb-[15px]">
                Generate
            </button>
        </div>
    </>
}

export default Random;