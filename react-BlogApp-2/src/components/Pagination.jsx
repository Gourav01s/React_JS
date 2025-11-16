import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Pagination = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext);
    if (!totalPages) return null;
    return (
        <div className=" bg-white py-2 border-t-2 border-t-gray-300">
            <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
                {page > 1 && (
                    <button onClick={() => handlePageChange(page - 1)}
                    className="border-2 border-gray-300 py-1 px-4 rounded-md">
                        Previous
                    </button>
                )}
                {page < totalPages && (
                    <button onClick={() => handlePageChange(page + 1)}
                    className="border-2 border-gray-300 py-1 px-4 rounded-md">
                        next
                    </button>
                )}

                <p className="text-sm font-semibold ml-auto ">
                    page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
};

export default Pagination
