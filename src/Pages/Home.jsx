import Logo from "Assets/BookShelf.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-evenly h-[80vh]">
            <div className="h-56 w-52">
                <img className="w-full h-full" src={Logo} alt="logo" />
            </div>
            <div className="text-3xl flex items-center justify-around">
                <div className="flex flex-col items-center gap-6 basis-2/5 font-semibold leading-[3rem] tracking-[0.4rem]">
                    <h1 className="uppercase text-white">book shelf</h1>
                    <div className="capitalize text-center text-warning">your personal library and social network for bookworms</div>
                </div>
                <div className="text-lg text-black flex gap-4">
                    <Link to="/signup">
                        <button className="capitalize btn btn-primary px-4 py-2 rounded-md font-semibold">register</button>
                    </Link>
                    <Link to="/signin">
                        <button className="capitalize btn btn-warning px-4 py-2 rounded-md font-semibold">login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}