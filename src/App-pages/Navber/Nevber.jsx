import { CiBookmark, CiHome } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";

import { Link } from "react-router-dom";
import HomeImg from "../../assets/logo.png"
import support from "../../assets/I want to support.png"


const Nevber = () => {
    return (
        <div className="bg-slate-50 py-10 px-6 shadow-2xl rounded ">
            <Link to='/' > <img src={HomeImg} alt="" /> </Link>
            <div className="  flex flex-col gap-6  text-3xl items-center py-36 ">
                <Link to='/' > <CiHome />   </Link>
                <Link to='/deshboard' > <RxDashboard /></Link>
                <Link to='/lightbulb' > <FaRegLightbulb /></Link>
                <Link to='/bookmark' > <CiBookmark /></Link>
                <Link to='/messagessquar' ><LuMessagesSquare /></Link>
                <Link to='/bookoutline' > <IoBookOutline /></Link>


            </div>
            <Link to='/ ' ><img src={support} alt="" /> </Link>
        </div>

    );
};

export default Nevber;