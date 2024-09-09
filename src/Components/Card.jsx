import catImage from '../Assets/Images/cat.jpg';
import HoverBottomSvg from "./HoverBottomSvg.jsx";
import {useFullHoverContext} from "../HoverContext.js";

const Card = ({name, id}) => {
    const {hoveredId, setHoveredId} = useFullHoverContext()
    return (
        <div className="flex flex-col">
            <button
                className=" relative h-72 w-52  dark:border-primary_card_dark border-primary_card_light
         transition duration-[400ms] ease-in-out"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}>
                <div className="flex flex-col h-full">
                    <div className="h-2/3 border-[3px] border-b-[0px]  dark:border-primary_card_dark
                 border-primary_card_light ">
                        <img src={catImage} className="h-full w-full object-none" alt={name}/>
                    </div>
                    <p className="h-1/3 border-[3px] dark:border-primary_card_dark border-primary_card_light">
                        {name}
                    </p>
                </div>
                <div className="absolute inset-0 p-[4px]">
                    <div
                        className="w-full h-full border-[3px] border-transparent
                        transition duration-[200ms] ease-in-out
                        hover:border-primary_card_light
                        dark:hover:border-primary_card_dark"
                    ></div>
                </div>
            </button>
                {hoveredId === id && <HoverBottomSvg id={hoveredId}/>}
        </div>
    )
}

export default Card;


