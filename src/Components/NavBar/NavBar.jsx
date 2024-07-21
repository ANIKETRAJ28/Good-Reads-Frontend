import { CiMenuKebab } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "Redux/Slices/authSlice";

export default function NavBar() {

    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function onLogout() {
        dispatch(logout());
    }

    return (
        <div className="navbar drawer drawer-open bg-neutral px-8 z-10">
            <div className="flex-1">
                <Link to="/dashboard" className="btn btn-ghost text-xl">BookShelf</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {authState.isLoggedIn && <li><Link to="/shelf">Shelfs</Link></li>}
                    {authState.isLoggedIn && <li><Link>{localStorage.getItem("username")}</Link></li>}
                    <li>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="text-xl"><CiMenuKebab /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-gray-700 rounded-box z-[1] w-fit mt-4 shadow-md">
                                {authState.isLoggedIn &&<li onClick={onLogout}><Link to="/signin">Logout</Link></li>}
                                {!authState.isLoggedIn && <li><Link to="/signin">Sign In</Link></li>}
                                {!authState.isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}