import Categories from "./Categories/Categories";
import Deatils from "./Deatils/Deatils";


const Home = () => {
    return (
        <div className=" grid grid-cols-12  gap-6  ">
            <div className="  col-span-4 " > <Categories />  </div>
            <div className=" col-span-8 " > <Deatils /> </div>
        </div>
    );
};

export default Home;