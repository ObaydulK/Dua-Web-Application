import Categories from "./Categories/Categories";
import Deatils from "./Deatils/Deatils";


const Home = () => {
    return (
        <div>
            <div className="  flex justify-between py-4 ">
                <div>Dua Page</div>
                <div >
                    <form className="items-center align-center">
                        {/* <input type="text" className="border-4 " /> */}
                        <input type="search" name="" placeholder="Search by Dua Name " className="shadow-2xl rounded-2xl p-2 pr-10 items-center col-span-4" id="" />
                         k
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