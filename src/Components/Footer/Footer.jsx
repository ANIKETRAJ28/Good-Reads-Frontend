import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative left-0 bottom-0 py-5 flex flex-col gap-4 sm:flex-row items-center justify-between text-white bg-neutral sm:px-20">
            <section>
                Copyright 2023 | All rights reserved
            </section>
            <section className="flex items-center justify-center gap-10 text-2xl text-white">
                <Link className="hover:text-info transition-all ease-in-out duration-300">
                    <BsFacebook/>
                </Link>
                <Link className="hover:text-info transition-all ease-in-out duration-300">
                    <BsInstagram/>
                </Link>
                <Link className="hover:text-info transition-all ease-in-out duration-300">
                    <BsLinkedin/>
                </Link>
                <Link className="hover:text-info transition-all ease-in-out duration-300">
                    <BsTwitterX/>
                </Link>
            </section>
        </footer>
    );
}