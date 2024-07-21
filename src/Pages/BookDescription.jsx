import BookIcon from "Assets/BookIcon.jpg";
import Layout from "Layout/Layout";
import { useEffect } from "react";
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addBookToShelf, downloadShelves } from "Redux/Slices/shelfSlice";

export default function BookDescription() {

    const {state} = useLocation();

    const shelfState = useSelector((state) => state.shelf);
    const dispatch = useDispatch();

    async function getShelves() {
        try {
            await dispatch(downloadShelves());
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getShelves();
    }, []);

    async function addBook(e) {
        const shelf = e.target.textContent;
        await dispatch(addBookToShelf({shelf, book: state.data._id}));
        await dispatch(downloadShelves());
    }

    return (
        <Layout>
            <div className="card md:card-side my-5 bg-gray-800 w-96 md:w-fit md:mx-[10vw] shadow-lg">
                <figure className="h-full">
                    <img
                        className="md:w-[30rem]"
                        src={BookIcon}
                        alt="Movie" 
                        />
                </figure>
                <div className="card-body gap-4">
                    <h2 className="card-title text-xl md:text-4xl">{state.data.title}</h2>
                    <div className="flex flex-col gap-4">
                        <p className="w-fit">{state.data.description}</p>
                        <div role="tablist" className="tabs tabs-boxed w-fit gap-4">
                            {state.data.genres.map(genre => <a key={genre._id} role="tab" className="tab tab-active w-fit">{genre.name}</a>)}
                        </div>
                        <div className="flex gap-8">
                            <div className="flex gap-2 items-center text-xl">
                                <div className="text-3xl"><IoIosStar /></div>
                                <span>{state.data.rating}</span>
                            </div>
                            <div className="flex gap-2 items-center text-xl">
                                <div className="text-3xl"><GiBookCover /></div>
                                <span>{state.data.pages}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-xl">
                            <div className="text-3xl"><AiFillCalendar /></div>
                            <span>{state.data.publishDate}</span>
                        </div>
                        <div className="card-actions flex-col md:flex-row justify-between">
                            <div className="flex items-center gap-2 md:text-xl">
                                <AiOutlineUser />
                                {state.data.author.name}
                            </div>
                        </div>
                    </div>
                    <div className="card-actions">
                        <div id="shelf-selector" className="dropdown dropdown-right dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-primary m-1">Add to shelf</div>
                            <ul onClick={addBook} tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                {
                                    shelfState.shelves.map((shelf) => <li data-key={shelf._id} key={shelf._id}><a>{shelf.name}</a></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}