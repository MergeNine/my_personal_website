import React from "react";
import kotlinSvg from "../../Assets/Svg/kotlin.svg";
import javaSvg from "../../Assets/Svg/java.svg";
import jsSvg from "../../Assets/Svg/js.svg";

const HoverTopSvg = ({ id }) => {
  switch (id) {
    case 1:
      return (
        <img
          className="h-[60px] w-[150px] scale-100"
          src={javaSvg}
          alt="JavaSvg"
        />
      );
    case 2:
      return (
        <img
          className="h-[60px] w-[150px] scale-75"
          src={kotlinSvg}
          alt="KotlinSvg"
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
