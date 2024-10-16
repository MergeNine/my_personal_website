import HoverTopSvg from "./HoverTopSvg";
import Card from "./Card";
import {useFullHoverContext} from "../Util/HoverContext";

const {hoveredId, setHoveredId} = useFullHoverContext();
const SelectedWork = () => {
    return (<div className="mb-4  bg-primary_wave_light dark:bg-primary_wave_dark">
            <div className="min-w-[1024px]  max-w-5xl mx-auto">
                <div className=" ml-12 flex flex-col justify-start">
                    <section className="text-primary_text_light dark:text-primary_text_dark">
                        <div className="mr-24 flex h-[60px] items-center justify-between">
                            <h1 className="text-4xl">Selected Work</h1>
                            {hoveredId && <HoverTopSvg id={hoveredId}/>}
                        </div>
                    </section>
                    <div className="0 relative -ml-12 mt-6 flex h-72 justify-center gap-x-2">
                        <Card name="Hello" id={1}/>
                        <Card name="Hell" id={2}/>
                        <Card name="He" id={3}/>
                    </div>
                </div>
            </div>
        </div>)

}

export default SelectedWork