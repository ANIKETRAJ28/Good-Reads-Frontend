import BookCard from "Components/BookCard/BookCard";
import Layout from "Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { downloadBooks } from "Redux/Slices/bookSlice";

export default function DashBoard() {

    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    const bookState = useSelector((state) => state.book);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!authState.isLoggedIn) navigate("/signin");
        if(bookState.bookList.length == 0) dispatch(downloadBooks());
    }, []);
    return (
        <Layout>
            {
                bookState.bookList.length > 0 &&
                bookState.bookList.map((book) => <BookCard key={book._id} data={book}/>)
            } 
        </Layout>
    );
}