import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";


const BlogDetails = ({post}) => {

    // const { posts } = useContext(AppContext);
  return (
    <div className="   ">
         <div className=" border-b-1 border-b-gray-400 bg-green-400 text-4xl px-3 w-full-w ">
            {/* <NavLink to={`/blog/${post.id}`} className="font-bold text-sm "><span>{post.title}</span> </NavLink> */}
            <p className="text-[14px]">
                  By <span className="italic">{post.author}</span> on{" "}
                  
                  <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className="underline font-bold">{post.category}</span>  
                  </NavLink>
            </p>
            <p className="text-[14px]">Posted on {post.date}</p>
            <p className="text-[16px] mt-[13px]">{post.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
                {post.tags.map((tag, index) => {
                    return (
                        <NavLink key={index}  to={`/tags/${tag.replaceAll(" ","-")}`}>
                            <span className="text-xs font-semibold underline text-blue-500 cursor-pointer">#{tag}</span>
                        </NavLink>
                    )
                })}
            </div>
                        
        </div>
    </div>
  )
};

export default BlogDetails;
