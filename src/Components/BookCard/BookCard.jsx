import BookIcon from "Assets/BookIcon.jpg";
import { AiOutlineUser } from "react-icons/ai";

export default function BookCard({author, title, description}) {
    return (
        <div className=" flex-col card card-side mt-5 bg-gray-800 w-9/12 shadow-lg md:flex-row">
            <figure>
                <img
                    className="w-[15rem]"
                    src={BookIcon}
                    alt="Movie" 
                    />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <div className="flex items-center gap-2 text-xl">
                        <AiOutlineUser />
                        {author}
                    </div>
                <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
}