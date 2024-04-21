
import Language from "../../assets/Langauage.png"
import General from "../../assets/Frame.png"
import settings from "../../assets/54-menu-2.png"





const Setting = () => {
    return (
        <>

            <div className="justify-end flex pb-6  pt-4">
                <div className=" avatar online ">
                    <div className="w-12  rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>

            <div className=" bg-white rounded-lg pt-2 pb-40 " >
                <h1 className="text-center text-xl py-2 " >Setting</h1>
                <div className=" grid grid-flow-row gap-6 px-2">
                    <div className="flex items-center gap-1 p-2 bg-slate-200 rounded ">
                        <img src={Language} alt="" />
                        <h1>Language Settings </h1>
                    </div>
                    <div className="flex items-center gap-1 p-2 bg-slate-200 rounded ">
                        <img src={General} alt="" />
                        <h1>General Setting </h1>
                    </div>
                    <div className="flex items-center gap-1 p-2 bg-slate-200 rounded ">
                        <img src={settings} alt="" />
                        <h1>Font Settings </h1>
                    </div>
                    <div className="flex items-center gap-1 p-2 bg-slate-200 rounded ">
                        <img src={settings} alt="" />
                        <h1>Appearance Settings</h1>
                    </div>
                    <div className="form-control border-2">
                        <label className="label cursor-pointer">
                            <span className="label-text">Night Mode</span>
                            <input type="checkbox" className="toggle" />
                        </label>
                    </div>

                    {/* <div tabIndex={0} className="collapse bg-base-200"> 
                         <div className="collapse-title ">
                            <div className="flex items-center gap-1 bg-slate-200 rounded ">
                                <img src={settings} alt="" />
                                <h1>Appearance Settings</h1>
                            </div>
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div> */}
                </div>

            </div>
        </>
    );
};

export default Setting;