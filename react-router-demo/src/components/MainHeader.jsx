import { Outlet, useNavigate } from "react-router-dom";

const MainHeader = () => {

    const navigate = useNavigate();
    function clickBackHandler() {
        // move to support component
        navigate(-1);
    }   

    return <>
        <div>
            <Outlet />
            <button onClick={clickBackHandler}>Move Back</button>
        </div>
    </>
}

export default MainHeader;