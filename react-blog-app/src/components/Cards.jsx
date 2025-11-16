import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Cards = ({post}) => {

    // const { posts } = useContext(AppContext);
  return (
    <div>
         <div >
            <p>{post.title}</p>
            <p>
                By <span>{post.author }</span> on <span>{post.category} </span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>

            console.log('in blogs');

            <div>
                {
                    post.tags.map((tag, index ) => {
                        return <span key={index}>{`#${tag}`}</span>
                    })
                }
            </div>
        </div>
    </div>
  )
};

export default Cards;
