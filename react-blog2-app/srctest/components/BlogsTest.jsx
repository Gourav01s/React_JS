import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { useContext } from "react";


const Blogs = () => {

    //  consumption of context
    const { loading, posts } = useContext(AppContext);
    console.log(" posts in Blogs component");
    console.log(posts);

    return (
        <div className="max-w-[670px] w-11/12 py-17  flex flex-col gap-y-7 mt-[350px]   ">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => {
                    return <div key={post.id} className=" border-b-1 border-b-gray-400 ">
                        <p className="font-bold text-sm ">{post.title}</p>
                        <p className="text-[14px]">
                            By <span className="italic">{post.author}</span> on{" "}
                            <span className="underline font-bold">{post.category}</span>
                        </p>
                        <p className="text-[14px]">Posted on {post.date}</p>
                        <p className="text-[16px] mt-[13px]">{post.content}</p>
                        <div className="flex flex-wrap gap-x-2 items-center">
                            {post.tags.map((tag, index) => {
                                return <span key={index} className="text-xs font-semibold underline text-blue-500 cursor-pointer">#{tag}</span>;
                            })}
                        </div>
                        
                    </div>;
                })
            )}
        </div>
    )


    // return (
    //     <div>
    //         {
    //             loading ?
    //                 (<Spinner/>):
    //                 (
    //                     posts.length === 0 ?
    //                     (<div>
    //                             <p>No Posts found</p> 
    //                             console.log('checked the lenght of posts');
    //                     </div>) :
    //                         (posts.map((post) => (
    //                             <div key={post.id}>
    //                                 <p>{post.title}</p>
    //                                 <p>
    //                                     By <span>{post.author }</span> on <span>{post.category} </span>
    //                                 </p>
    //                                 <p>Posted on {post.date}</p>
    //                                 <p>{post.content}</p>

    //                                 console.log('in blogs');

    //                                 <div>
    //                                     {
    //                                         post.tags.map((tag, index ) => {
    //                                             return <span key={index}>{`#${tag}`}</span>
    //                                         })
    //                                     }
    //                                 </div>
    //                             </div>
    //                         ) ))
    //                 )
    //         }
    //     </div>
    // )
};

export default Blogs
