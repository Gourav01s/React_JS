
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "",password:"",confirmPassword:"",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
    

    function changeHandler(event) {
        return (
            setFormData((prev) => (
                {
                    ...prev,[event.target.name]:event.target.value
                }
            ) )
        )
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Logged In");
        // const accountData = { ...FormData };
        const finalAccountData = {
            ...formData, accountType
        }

        console.log("print final account data");
        console.log(finalAccountData);
        navigate('/dashboard');
    }


    return <>
        <div >

            <div className="flex gap-x-1 p-1 bg-gray-900 rounded-full max-w-max mt-6">
                <button className={`${accountType === "student" 
                ? 
                 "bg-black text-white  " : "bg-transparent text-gray-400 " }
                 py-2 px-5 rounded-full max-w-max transition-all duration-300 `}
                onClick={()=> setAccountType("student")}>
                    Student
                </button>
                <button className={`${accountType === "instructor" 
                ? 
                 "bg-black text-white  " : "bg-transparent text-gray-400 " }
                 py-2 px-5 rounded-full max-w-max transition-all duration-300 `}
                onClick={()=> setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* firstname and lastname */}

                <div className="flex gap-x-4 mt-[10px]" >
                    <label className="w-full" >
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]" >
                            First Name<sup className="text-red-300" >*</sup>
                        </p>
                        
                        <input type="text"
                            required
                            value={formData.firstName}
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="enter first name"
                            className=" bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
                        />
                    </label>
                    <label className="w-full" >
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]" >
                            Last Name<sup className="text-red-300" >*</sup>
                        </p>
                        
                        <input type="text"
                            required
                            value={formData.lastName}
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="enter last name"
                            className="bg-gray-900  rounded-[0.75rem] w-full p-[12px] "
                        />
                    </label>
                    
                </div>

                {/* email input */}

                <label className="w-full" >
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-red-300">*</sup>
                    </p>
                    
                    <input type="email"
                        required
                        value={formData.email}
                        name="email"
                        onChange={changeHandler}
                        placeholder="enter email address"
                        className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
                    />
                </label>

                {/* password area */}
                <div className="flex gap-x-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-red-300">*</sup>
                        </p>
                        
                        <input type={showPassword ? ("text"):("password")}
                            required
                            value={formData.password}
                            name="password"
                            onChange={changeHandler}
                            placeholder="enter password "
                            className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
                        />
                        
                        <span onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] cursor-pointer z-10"
                        >
                            {showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                    
                    <label className="w-full relative">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                            confirm Password<sup className="text-red-300">*</sup>
                        </p>
                        
                        <input type={showConfirmPassword ? ("text") : ("password")}
                            required
                            value={formData.confirmPassword}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="enter password again"
                            className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
                        />
                        <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-[38px] cursor-pointer z-10">
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium w-full">
                    Create Account
                </button>
            </form>
        </div>
        
    </>
}

export default SignupForm;