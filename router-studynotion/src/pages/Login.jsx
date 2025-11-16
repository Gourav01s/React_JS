import Template from "../components/template";
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
    return <>
        <Template
            title='Welcome back'
            desc1="Build skills for today , tommorow and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    </>
}

export default Login;