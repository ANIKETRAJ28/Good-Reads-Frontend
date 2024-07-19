import BookIcon from "Assets/BookIcon.jpg";
import Layout from "Layout/Layout";
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function BookDescription() {

    const {state} = useLocation();

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
                <div className="card-body">
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
                </div>
            </div>
        </Layout>
    );
}