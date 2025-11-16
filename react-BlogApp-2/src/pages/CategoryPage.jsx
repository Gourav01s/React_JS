import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header/>
            <div>
                {
                    <button onClick={()=> navigate(-1)}>
                        Back
                    </button>
                } 
                <h2>
                    Blog On Category <span>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination/>
        </div>
    )
};

export default CategoryPage
