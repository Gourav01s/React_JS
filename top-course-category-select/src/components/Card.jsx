import { MdGolfCourse } from "react-icons/md";
import { toast } from "react-toastify";

const Card = (props) => {
    
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(props.course.id)) {
            // already liked one
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        } else {
            // new course to add to liked
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id]);
            } else {
                setLikedCourses((prev) => [...prev, props.course.id]);
            }
            toast.success('Liked Sucessfully');
        }
    }

    return <>
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-ms overflow-hidden">
            <div className="relative">
                <img src={props.course.image.url} alt={props.course.image.alt} />
                <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 
                grid place-items-center" >
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(props.course.id) ? <MdGolfCourse fontSize='1.75rem'/> : <MdGolfCourse fontSize='0.75rem'/>
                        }
                    </button>
                </div>
            </div>

            <div className="p-4" >
                <p className="text-white font-semibold text-lg leading-6" >{props.course.title} </p>
                <p className="mt-2">
                    {
                        props.course.description.length > 100 ?
                            (props.course.description.substr(0,100)+"...") :
                             (props.course.description)
                    }
                </p>
            </div>
        </div>
    
    </>
}

export default Card;