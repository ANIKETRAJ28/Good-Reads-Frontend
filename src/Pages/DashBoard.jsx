import BookCard from "Components/BookCard/BookCard";
import Layout from "Layout/Layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {

    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    useEffect(() => {
        if(!authState.isLoggedIn) navigate("/signin");
    }, []);
    return (
        <Layout>
            <BookCard title="Harry potter" description="Harry Potter Harry Potter Harry Potter Harry Potter Harry Potter" author="Harry"/>
        </Layout>
    );
}