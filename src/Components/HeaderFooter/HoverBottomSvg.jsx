import React from "react";
import SpringSvg from "../../Assets/Svg/SvgComponents/SpringSvg";
import TailwindSvg from "../../Assets/Svg/SvgComponents/TailwindSvg";
import ReactSvg from "../../Assets/Svg/SvgComponents/ReactSvg";

const HoverBottomSvg = ({id}) => {
    switch (id) {
        case 1:
            return (<div className="flex h-[60px] w-52 justify-center p-2">
                <ReactSvg className="h-[30px] w-[50px] scale-100"/>
                <SpringSvg className="h-[30px] w-[50px] scale-100"/>
                <TailwindSvg className="h-[30px] w-[50px] scale-100"/>
            </div>)
        case 2:
            return (<div className="flex h-[60px] w-52 justify-center p-2">
                <ReactSvg className="h-[30px] w-[50px] scale-100"/>
                <SpringSvg className="h-[30px] w-[50px] scale-100"/>
                <TailwindSvg className="h-[30px] w-[50px] scale-100"/>
            </div>)
        case 3:
            return (<div className="flex h-[60px] w-52 justify-center p-2">
                <ReactSvg className="h-[30px] w-[50px] scale-100"/>
                <SpringSvg className="h-[30px] w-[50px] scale-100"/>
                <TailwindSvg className="h-[30px] w-[50px] scale-100"/>
            </div>)
        default:
            return null;
    }
};

export default HoverBottomSvg;
