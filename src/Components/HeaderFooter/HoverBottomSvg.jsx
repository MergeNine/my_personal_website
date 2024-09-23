import React from "react";
import reactSvg from "../../Assets/Svg/react.svg";
import tailwindSvg from "../../Assets/Svg/tailwind.svg";
import springSvg from "../../Assets/Svg/spring.svg";

const HoverBottomSvg = ({id}) => {
    switch (id) {
        case 1:
            return (
                <div className="flex h-[60px] w-52 justify-center p-2">
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={reactSvg}
                        alt="JavaSvg"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={tailwindSvg}
                        alt="JavaSvg"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={springSvg}
                        alt="JavaSvg"
                    />
                </div>
            );
        case 2:
            return (
                <div className="flex h-[60px] w-52 justify-center p-2">
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={reactSvg}
                        alt="JavaSvg"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={tailwindSvg}
                        alt="JavaSvg"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={springSvg}
                        alt="JavaSvg"
                    />
                </div>
            );
        case 3:
            return (
                <div className="flex h-[60px] w-52 justify-center p-2">
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={reactSvg}
                        alt="JavaSvg"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={tailwindSvg}
                        alt="JavaSvg"
                    />
                    <img
                        className="h-[30px] w-[50px] scale-100"
                        src={springSvg}
                        alt="JavaSvg"
                    />
                </div>
            );
        default:
            return null;
    }
};

export default HoverBottomSvg;
