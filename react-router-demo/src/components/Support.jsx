import { useNavigate } from "react-router-dom";

const Support = () => {
    const navigate = useNavigate();

    function clickHandler() {
        // move to labs 
        navigate("/labs");
    }

    return (
        <div>
            <p>
                Support page
            </p>
            <button onClick={clickHandler}>Move to Labs</button>
        </div>
    )
}

export default Support;