import BookIcon from "Assets/BookIcon.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function BookCard(data) {

    const navigate = useNavigate();

    return (
        <div className="card md:card-side my-5 bg-gray-800 w-9/12 shadow-lg">
            <figure className="h-full">
                <img
                    className="md:w-[15rem]"
                    src={BookIcon}
                    alt="Movie" 
                    />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl md:text-4xl">{data.data.title}</h2>
                <p>{data.data.description}</p>
                <div className="card-actions flex-col md:flex-row justify-between">
                    <div className="flex items-center gap-2 md:text-xl">
                        <AiOutlineUser />
                        {data.data.author.name}
                    </div>
                    <button onClick={() => navigate("/book/description", {state: {...data}})} className="btn btn-primary">More Details</button>
                </div>
            </div>
        </div>
    );
}