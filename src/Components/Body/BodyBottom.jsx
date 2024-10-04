import {useFullHoverContext} from "../Util/HoverContext";
import Card from "./Card";
import HoverTopSvg from "./HoverTopSvg";
import Timeline from "./Timeline";

const BodyBottom = () => {

    return (
        <div className=" bg-primary_wave_light dark:bg-primary_wave_dark -mt-10 ">
            <div className="max-w-5xl mx-auto
            gap-6 px-52 lg:min-w-[768px] lg:max-w-[1024px]">
                <Timeline/>
            </div>


        </div>


    )
};

export default BodyBottom;

