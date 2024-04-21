import Categories from "./Categories/Categories";
import Deatils from "./Deatils/Deatils";
import search from "../../assets/search.png"

const Home = () => {
    return (
        <div>
            <div className="  flex justify-between py-4 items-center ">
                <div className="text-[16px] font-bold" >Dua Page</div>
                <div >
                    <form className="shadow rounded-2xl p-2  bg-white flex items-center align-center">
                        {/* <input type="text" className="border-4 " /> */}
                        <input type="search" name="" placeholder="Search by Dua Name " className=" pr-10 items-center col-span-4 border-none bg-none  " id="" />
                        <img src={search} alt="" className=" bg-slate-300 p-1 rounded" />
                    </form>
                </div>
            </div>
            <div className=" grid grid-cols-12  gap-6 ">
                <div className="  col-span-4 " > <Categories />  </div>
                <div className=" col-span-8 " > <Deatils /> </div>
            </div>
        </div>
    );
};

export default Home;