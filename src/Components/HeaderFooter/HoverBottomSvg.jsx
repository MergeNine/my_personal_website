import React from "react";
import reactSvg from "../../Assets/Svg/React.svg";
import tailwindSvg from "../../Assets/Svg/Tailwind.svg";
import springSvg from "../../Assets/Svg/Spring.svg";

const HoverBottomSvg = ({id}) => {
    switch (id) {
        case 1:
            return (
                <div className="flex h-[60px] w-52 justify-center p-2">
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={reactSvg}
                        alt="Java"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={tailwindSvg}
                        alt="Java"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={springSvg}
                        alt="Java"
                    />
                </div>
            );
        case 2:
            return (
                <div className="flex h-[60px] w-52 justify-center p-2">
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={reactSvg}
                        alt="Java"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={tailwindSvg}
                        alt="Java"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={springSvg}
                        alt="Java"
                    />
                </div>
            );
        case 3:
            return (
                <div className="flex h-[60px] w-52 justify-center p-2">
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={reactSvg}
                        alt="Java"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={tailwindSvg}
                        alt="Java"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={springSvg}
                        alt="Java"
                    />
                </div>
            );
        default:
            return null;
    }
};

export default HoverBottomSvg;
