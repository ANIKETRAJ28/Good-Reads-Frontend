import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div className="h-[100vh] flex flex-col justify-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl text-white">Login to your account</h1>
                <div>
                    <span className="text-white">Don&apos;t have an account ?</span>
                    <Link to="/signup">
                        <button className="btn btn-success rounded-md px-4 py-0 mx-4 hover:bg-green-500 transition-all ease-in-out duration-500">Sign Up</button>
                    </Link>
                </div>
            </div>
            <form className="flex flex-col items-center gap-8 w-[80%] mx-auto my-4">
                <div className="w-80 text-white">
                    <input 
                        type="email"
                        placeholder="Email..."
                        className="w-full py-3 px-6 focus:outline-none focus:bg-white focus:text-black"
                    />
                </div>
                <div className="w-80 text-white">
                    <input 
                        type="password"
                        placeholder="Password..."
                        className="w-full py-3 px-6 focus:outline-none focus:bg-white focus:text-black"
                    />
                </div>
                <div className="w-80 text-white">
                    <button className="btn btn-success rounded-md w-full hover:bg-green-500 transition-all ease-in-out duration-500">Submit</button>
                </div>
            </form>
        </div>
    );
}