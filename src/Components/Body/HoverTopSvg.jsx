import React from "react";
import kotlinSvg from "../../Assets/Svg/Kotlin.svg";
import javaSvg from "../../Assets/Svg/Java.svg";
import jsSvg from "../../Assets/Svg/Js.svg";

const HoverTopSvg = ({ id }) => {
  switch (id) {
    case 1:
      return (
        <img
          className="h-[60px] w-[150px] scale-100"
          src={javaSvg}
          alt="Java"
        />
      );
    case 2:
      return (
        <img
          className="h-[60px] w-[150px] scale-75"
          src={kotlinSvg}
          alt="Kotlin"
        />
      );
    case 3:
      return (
        <img
          className="h-[60px] w-[150px] scale-75"
          src={jsSvg}
          alt="JavaScript"
        />
      );
    default:
      return null;
  }
};

export default HoverTopSvg;
