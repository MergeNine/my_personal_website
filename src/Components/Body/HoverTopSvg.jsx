import JsSvg from "../../Assets/Svg/SvgComponents/JsSvg";
import JavaSvg from "../../Assets/Svg/SvgComponents/JavaSvg";
import KotlinSvg from "../../Assets/Svg/SvgComponents/KotlinSvg";

const HoverTopSvg = ({ id }) => {
  switch (id) {
    case 1:
      return (
          <JavaSvg className="h-[60px] w-[150px] scale-100"/>
      );
    case 2:
      return (
          <KotlinSvg className="h-[60px] w-[150px] scale-75"/>
      );
    case 3:
      return (
          <JsSvg className="h-[60px] w-[150px] scale-75"/>
      );
    default:
      return null;
  }
};

export default HoverTopSvg;
