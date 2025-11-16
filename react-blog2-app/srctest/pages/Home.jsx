import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";


const Home = () => {
  return (
      <div>
          <Header />
          <div className="max-w-[1100px]">
              <Blogs />
              <Pagination/>
          </div>
      </div>
  )
};

export default Home
