import { Outlet } from "react-router-dom";
// import Dua from "../Dua/Dua";
import Setting from "../App-pages/Settings/Setting";
import Nevber from "../App-pages/Navber/Nevber";


const Main = () => {
    return (
        <div className=" grid grid-cols-12 gap-4 p-6 font-serif">
            <div className=" col-span-1 ">
                <Nevber />
            </div>
            <div className="col-span-9">
                <Outlet />
            </div>
            <div className=" col-span-2   ">
                <Setting />
            </div>
        </div>
    );
};

export default Main;