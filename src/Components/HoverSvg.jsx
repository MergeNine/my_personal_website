import React from 'react';
import kotlinSvg from '../Assets/Svg/Kotlin.svg';
import javaSvg from '../Assets/Svg/Java.svg';
import jsSvg from '../Assets/Svg/Js.svg';

const HoverSvg = ({ id }) => {
    switch (id) {
        case 1:
            return <img className="scale-100 w-[150px] h-[60px]" src={javaSvg} alt="Java" />;
        case 2:
            return <img className="scale-75 w-[150px] h-[60px]" src={kotlinSvg} alt="Kotlin" />;
        case 3:
            return <img className="scale-75 w-[150px] h-[60px]" src={jsSvg} alt="JavaScript" />;
        default:
            return null;
    }
};

export default HoverSvg;