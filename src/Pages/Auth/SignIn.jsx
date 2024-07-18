import Layout from "Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "Redux/Slices/authSlice";

export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    useEffect(() => {
        if(authState.isLoggedIn) navigate("/");
    }, []);

    const [formDetails, setFormDetails] = useState({
        email: '',
        password: '',
        username: ''
    });

    function resetFormDetails() {
        setFormDetails({
            email: '',
            password: '',
        });
    }

    async function onHandleSubmit(e) {
        e.preventDefault();
        const response = await dispatch(signin(formDetails));
        if(response.payload.status == 200) {
            navigate("/dashboard");
            resetFormDetails();
        }
    }

    function setValue(e) {
        const {name, value} = e.target;
        setFormDetails({...formDetails, [name]: value});
    }

    return (
        <Layout>
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
                <form onSubmit={onHandleSubmit} className="flex flex-col items-center gap-8 w-[80%] mx-auto my-4">
                    <div className="w-80 text-white">
                        <input 
                            name="email"
                            value={formDetails.email}
                            type="email"
                            placeholder="Email..."
                            className="w-full py-3 px-6 focus:outline-none focus:bg-white focus:text-black"
                            onChange={setValue}
                        />
                    </div>
                    <div className="w-80 text-white">
                        <input 
                            name="password"
                            value={formDetails.password}
                            type="password"
                            placeholder="Password..."
                            className="w-full py-3 px-6 focus:outline-none focus:bg-white focus:text-black"
                            onChange={setValue}
                        />
                    </div>
                    <div className="w-80 text-white">
                        <button className="btn btn-success rounded-md w-full hover:bg-green-500 transition-all ease-in-out duration-500">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}