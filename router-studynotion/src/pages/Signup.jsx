import Template from "../components/template";
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free."
            desc1="Build skills for today, tommorow and bayond."
            desc2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    )

}

export default Signup;