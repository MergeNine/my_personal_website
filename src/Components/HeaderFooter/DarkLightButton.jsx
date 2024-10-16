import DarkButtonSvg from "../../Assets/Svg/SvgComponents/DarkButtonSvg";
import LightButtonSvg from "../../Assets/Svg/SvgComponents/LightButtonSvg";

const DarkLightButton = ({toggleDarkMode,darkMode}) => {


     return (<li title="Mode" className="h-[23px] w-[23px] mr-3 ">
        <div
            className="text-primary_text_light dark:text-primary_text_dark navbar-icons"
            onClick={toggleDarkMode}>
            {darkMode ?
                (<DarkButtonSvg className="dark-light-fill"/>) :
                (<LightButtonSvg className=" dark-light-fill"/>
                )}
        </div>
    </li>);
};


export default DarkLightButton;
