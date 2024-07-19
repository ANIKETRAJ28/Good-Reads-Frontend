import Footer from "Components/Footer/Footer";
import NavBar from "Components/NavBar/NavBar";

export default function Layout({children}) {
    return (
        <>
            <NavBar/>
            <div className="min-h-[90vh] flex items-start justify-center">
                <div className="w-full flex flex-col items-center">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}