import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return <>
        <div className="flex w-11/12 max-w-[1200px] py-12 mx-auto gap-y-0 gap-x-29   justify-between">
            <div className="w-11/12 max-w-[450] mx-0">
                <h1 className=" font-semibold text-[1.875rem] loading-[2.375rem]">{title}</h1>

                <p className="text-[1.125rem] mt-4 loading-[1.625rem]">
                    <span className='text-slate-300'>{desc1}</span>
                    <br />
                    <span className="text-blue-300 italic">{desc2 }</span>
                </p>

                {formtype === 'signup' ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn } />):
                    (<LoginForm setIsLoggedIn={setIsLoggedIn } />)
                }
                
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-gray-500'></div>
                    <p className='text-gray-500'>OR</p>
                    <div className='h-[1px] w-full bg-gray-500'></div>
                </div>

                <button className='w-full flex items-center justify-center rounded-[8px] font-medium 
                border px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450]'>
                <img src={frameImage} alt="a frame"
                    height={558} width={504}
                    loading="lazy"
                />
                <img src={image} alt="a student"
                    height={558} width={504}
                    loading="lazy"
                    className='absolute -top-4 right-11'
                />
            </div>
        </div>
    </>
}

export default Template;