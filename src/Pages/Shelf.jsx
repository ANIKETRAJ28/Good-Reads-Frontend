import Layout from "Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadShelves } from "Redux/Slices/shelfSlice";

export default function Shelf() {

    const dispatch = useDispatch();
    const shelfState = useSelector((state) => state.shelf);
    const [activeShelf, setActiveShelf] = useState(null);

    async function getShelves() {
        try {
            const response = await dispatch(downloadShelves());
            setActiveShelf(response.payload.data.data[0]._id);
        } catch (error) {
            console.log(error);
        }
    }

    function handleOnChange(e) {
        const key = e.target.parentElement.getAttribute("data-key");
        setActiveShelf(key);
        const element = document.getElementById("my-drawer-2");
        element.checked = false;
    }

    useEffect(() => {
        getShelves();
    },[]);

    return (
        <Layout>
            {/* <div className="drawer"> */}
                <input id="my-drawer-2" type="checkbox" defaultChecked="false" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */} 
                    <label htmlFor="my-drawer-2" className="btn btn-primary">Shelf</label>
                </div>
                <div className="drawer-side absolute top-[4rem]">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul onClick={handleOnChange} className="menu bg-base-200 text-base-content min-h-full w-40 p-4">
                    {
                        shelfState.shelves.map((shelf) => <li className={`my-2 ${activeShelf == shelf._id ? "bg-gray-700 rounded-md" : ""}`} key={shelf._id} data-key={shelf._id}><a>{shelf.name}</a></li>)
                    }
                    </ul>
                </div>
            {/* </div> */}
        </Layout>
    );
}