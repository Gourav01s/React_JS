import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    // console.log(props.category);
    // console.log(props.courses);
    
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    console.log(category);
    
    // function getCourses() { 
    //     // if(category==="All")
    //     let allCourses = [];
        
    //     Object.values(courses).forEach((element) => {
    //         element.forEach((courseData) => {
    //             allCourses.push(courseData);
    //         });
    //     });
    //     return allCourses;
    // }
    // getCourses();

    // function getCourses() {
    //     if (category === "All") {
    //         let allCourses = [];
    //         Object.values(props.courses).array.forEach(element => {
    //             element.forEach((courseData) => {
    //                 allCourses.push(courseData);
    //             });
    //         });

    //         return allCourses;
    //     } else {
    //         return props.courses[category];
    //     }
    // }

    let allCourses = [];
    
    // function getCourses() {
    //     if (category === "All") {
    //         let allCourses = [];
    //         Object.values(props.courses).forEach((array) => {
    //             array.forEach((courseData) => {
    //                 allCourses.push(courseData);
    //             });
    //         });
    //         return allCourses;
    //     }
    //     else
    //     {
    //         return props.courses[category];
    //     }
    // }

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else
        {
            return props.courses[category];
        }
    }

    return <>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                   return <Card course={course} key={courses.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    </>
}

export default Cards;