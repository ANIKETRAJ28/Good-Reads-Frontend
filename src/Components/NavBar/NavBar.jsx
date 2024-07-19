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
                <a className="btn btn-ghost text-xl">BookShelf</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                {authState.isLoggedIn && <li><Link to="/shelf">Shelfs</Link></li>}
                {authState.isLoggedIn && <li><Link>{localStorage.getItem("username")}</Link></li>}
                <li>
                    <details>
                    <summary>Options</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        {authState.isLoggedIn &&<li onClick={onLogout}><Link to="/signin">Logout</Link></li>}
                        {!authState.isLoggedIn && <li><Link to="/signin">Sign In</Link></li>}
                        {!authState.isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
}