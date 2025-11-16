import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Pagination = () => {

    const { page, handlerPageChange, totalPages } = useContext(AppContext);
    if (!totalPages) return null;
    return (
        <div className=" fixed bottom-0 w-10/12 insert-x-0 bg-white py-2 border-t-2 border-t-gray-400 text-black">
            <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
                { page > 1 &&
                    <button onClick={() => handlerPageChange(page - 1)}
                    className="border-2 border-gray-400 py-1 px-4 rounded-md">
                        Previous
                    </button>
                }

                { page < totalPages &&
                    <button onClick={() => handlerPageChange(page + 1)}
                    className="border-2 border-gray-400 py-1 px-4 rounded-md">
                        Next
                    </button>
                }

                <p className="text-sm font-semibold ml-auto ">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination