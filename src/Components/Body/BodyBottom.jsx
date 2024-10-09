import {useFullHoverContext} from "../Util/HoverContext";
import Card from "./Secondary/Card";
import HoverTopSvg from "./Secondary/HoverTopSvg";
import Bio from "./Secondary/Bio";

const BodyBottom = () => {

    return (
        <article className=" bg-primary_wave_light dark:bg-primary_wave_dark -mt-14 ">
            <div className="max-w-5xl mx-auto
            gap-6 px-52 lg:min-w-[768px] lg:max-w-[1024px]">
                <Bio/>
            </div>
        </article>
    )
};

export default BodyBottom;

