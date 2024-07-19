import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import BookDescription from "Pages/BookDescription";
import DashBoard from "Pages/DashBoard";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import Shelf from "Pages/Shelf";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/book/description" element={<BookDescription/>}/>
            <Route path="/shelf" element={<Shelf/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}