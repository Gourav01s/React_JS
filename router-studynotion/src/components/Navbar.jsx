import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedin = props.isLoggedin;
    let setIsLoggedin = props.setIsLoggedin;

    return <>
        <div className='flex items-center justify-between w-11/12 max-w-[1160px] py-4 mx-auto '>
            <Link>
                <img src={logo} alt="Logo" height={0} width={220} loading='lazy' />
            </Link>

            <nav>
                <ul className='flex gap-3 ml-5'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>

            </nav>
                <div className='flex ml-5 mr-4 gap-3 ' >
                    { !isLoggedin &&
                        <Link to='/login'>
                        <button className='bg-richblack-800 py-[8px] px-[12px]
                            rounded-[8px] border boarder-richblack-700'>
                                LogIn
                            </button>
                        </Link>
                    }
                    { !isLoggedin &&
                        <Link to='/signup'>
                            <button className='bg-richblack-800 py-[8px] px-[12px]
                            rounded-[8px] border boarder-richblack-700'>
                                Sign Up
                            </button>
                        </Link>
                    }
                    { isLoggedin &&
                        <Link to='/'>
                        <button onClick={() => {
                            setIsLoggedin(false);
                            toast.success("Logged Out");
                            }} className='bg-richblack-800 py-[8px] px-[12px]
                            rounded-[8px] border boarder-richblack-700'>
                                Log Out
                            </button>
                        </Link>
                    }
                    { isLoggedin &&
                        <Link to='/dashboard'>
                            <button className='bg-richblack-800 py-[8px] px-[12px]
                            rounded-[8px] border boarder-richblack-700'>
                                Dashboard
                            </button>
                        </Link>
                    }
                </div>
        </div>
    </>
}

export default Navbar;