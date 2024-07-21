import BookIcon from "Assets/BookIcon.jpg";
import Layout from "Layout/Layout";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addShelf, downloadShelves } from "Redux/Slices/shelfSlice";

export default function Shelf() {

    const dispatch = useDispatch();
    const shelfState = useSelector((state) => state.shelf);
    const [activeShelf, setActiveShelf] = useState(null);
    const [books, setBooks] = useState([]);
    const [createShelf, setCreateShelf] = useState("");

    async function getShelves() {
        try {
            const response = await dispatch(downloadShelves());
            setActiveShelf(response.payload.data.data[0]._id);
            setBooks(response.payload.data.data[0].books);
        } catch (error) {
            console.log(error);
        }
    }

    function handleOnChange(e) {
        const key = e.target.parentElement.getAttribute("data-key");
        shelfState.shelves.forEach((shelf) => {
            if(shelf._id == key) {
                setBooks(shelf.books);
            }
        });
        setActiveShelf(key);
        if(key) {
            const element = document.getElementById("my-drawer-2");
            element.checked = false;
        }
    }

    useEffect(() => {
        getShelves();
    },[]);

    return (
        <Layout>
            {/* <div className="drawer"> */}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-primary self-start ml-12 mt-4">Shelf</label>
                <div className="drawer-content flex flex-col items-center justify-center m-4">
                    {/* Page content here */} 
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Author</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    books.map((book) => {
                                        return (
                                        <>
                                        <tr className="hover:bg-gray-800 transition-all ease-in-out duration-300">
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                            src={BookIcon}
                                                            alt="Book" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{book.title}</div>
                                                        <div className="text-sm opacity-50">{book.publishDate}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{book.author.name}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                        </>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="drawer-side absolute top-[4rem]">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul onClick={handleOnChange} className="menu bg-base-200 text-base-content min-h-full p-4">
                        <li className="hover:bg-transparent">
                            <div className="p-0 pr-4 flex items-center justify-between gap-2">
                                <input value={createShelf} onChange={(e) => setCreateShelf(e.target.value)} type="text" placeholder="Create" className="input input-bordered w-full" />
                                <span onClick={() => dispatch(addShelf({name: createShelf}))} className="text-xl"><FaLocationArrow /></span>
                            </div>
                        </li>
                    {
                        shelfState.shelves.map((shelf) => <li className={`my-2 ${activeShelf == shelf._id ? "bg-gray-700 rounded-md" : ""}`} key={shelf._id} data-key={shelf._id}><a>{shelf.name}</a></li>)
                    }
                    </ul>
                </div>
            {/* </div> */}
        </Layout>
    );
}