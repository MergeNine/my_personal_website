import React from 'react';
import reactSvg from '../Assets/Svg/React.svg';
import tailwindSvg from '../Assets/Svg/Tailwind.svg';
import springSvg from '../Assets/Svg/Spring.svg';

const HoverBottomSvg = ({id}) => {
    switch (id) {
        case 1:
            return (
                <div className="w-52 h-[60px] flex justify-center p-2">
                    <img className="scale-100 w-[50px] h-[30px]" src={reactSvg} alt="Java"/>
                    <img className="scale-100 w-[50px] h-[30px]" src={tailwindSvg} alt="Java"/>
                    <img className="scale-100 w-[50px] h-[30px]" src={springSvg} alt="Java"/>
                </div>)
        case 2:
            return (
                <div className="w-52 h-[60px] flex justify-center p-2">
                    <img className="scale-100 w-[50px] h-[30px]" src={reactSvg} alt="Java"/>
                    <img className="scale-100 w-[50px] h-[30px]" src={tailwindSvg} alt="Java"/>
                    <img className="scale-100 w-[50px] h-[30px]" src={springSvg} alt="Java"/>
                </div>)
        case 3:
            return (
                <div className="w-52 h-[60px] flex justify-center p-2">
                    <img className="scale-100 w-[50px] h-[30px]" src={reactSvg} alt="Java"/>
                    <img className="scale-100 w-[50px] h-[30px]" src={tailwindSvg} alt="Java"/>
                    <img className="scale-100 w-[50px] h-[30px]" src={springSvg} alt="Java"/>
                </div>)
        default:
            return null;
    }
};

export default HoverBottomSvg;