import {useFullHoverContext} from "../Util/HoverContext";
import Card from "./Secondary/Card";
import HoverTopSvg from "./Secondary/HoverTopSvg";
import Bio from "./Secondary/Bio";

const BodyBottom = () => {

    return (<article className="bg-primary_wave_light dark:bg-primary_wave_dark">
        <div className="max-w-5xl mx-auto -mt-14 text-base sm:tracking-wide ">
                <Bio/>
        </div>
    </article>)
};

export default BodyBottom;

