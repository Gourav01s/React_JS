import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    function clickHandler() {
        // move to support component
        navigate("/support");
    }
    function clickBackHandler() {
        // move to support component
        navigate(-1);
    }
    return (
        <div>
            <p>
                About page
            </p>
            <button onClick={clickHandler}>Move to Support</button>
            <div></div>
            <button onClick={clickBackHandler}>Move Back</button>
        </div>
    )
}

export default About;