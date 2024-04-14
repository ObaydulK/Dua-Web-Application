import { Outlet } from "react-router-dom";
// import Dua from "../Dua/Dua";
import Setting from "../App-pages/Settings/Setting";
import Nevber from "../App-pages/Navber/Nevber";


const Main = () => {
    return (
        <div className=" grid grid-cols-12 gap-4 ">
            <div className=" col-span-1 ">
                <Nevber />
            </div>
            <div className="col-span-9">
                <Outlet />
            </div>
            <div className=" col-span-2 bg-stone-400 ">
                <Setting />
            </div>
        </div>
    );
};

export default Main;