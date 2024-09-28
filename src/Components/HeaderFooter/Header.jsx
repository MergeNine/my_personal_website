import DarkLightButton from "./DarkLightButton.jsx";
import NotesSvg from "../../Assets/Svg/SvgComponents/NotesSvg";
import GithubSvg from "../../Assets/Svg/SvgComponents/GithubSvg";
import LinkedInSvg from "../../Assets/Svg/SvgComponents/LinkedinSvg";
import MenuIconSvg from "../../Assets/Svg/SvgComponents/MenuIconSvg";
import MenuDropDown from "./MenuDropDown";


const Header = () => {
    return (<header className=" justify-between items-center mx-7 p-2
    sticky flex  ">

        <button className=" focus:outline-none  relative text-nowrap  w-56 h-12 text-xl
  text-primary_text_light hover:text-primary_hover_light
  dark:text-primary_text_dark dark:hover:text-primary_hover_dark
  group overflow-visible">
  <span className="absolute w-64 h-12
    bg-gray-800 group-hover:opacity-100 opacity-0
    transition-opacity duration-200 ease-in-out
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    transform -skew-x-12 shadow-md rounded-md">
  </span>
            <span className="relative  ">
    Christopher Annunziato
  </span>
        </button>
        <MenuDropDown/>
        <ul className="flex gap-3 max-sm:hidden ">
            <li title="NotesSvg">
                <a href="#" target="_blank" className="focus:outline-none">
                    <div className="navbar-icons pl-[1p]">
                        <NotesSvg className="dark-light-fill h-[23px] w-[23px]"/>
                    </div>
                </a>
            </li>

            <li title="Github">
                <a href="https://github.com/MergeNine" target="_blank" className="focus:outline-none">
                    <div className="navbar-icons ">
                        <GithubSvg className="dark-light-fill h-[23px] w-[23px]"/>
                    </div>
                </a>
            </li>

            <li title="Linkedin">
                <a href="https://www.linkedin.com/in/cmannunziato/" target="_blank" className="focus:outline-none">
                    <div className="navbar-icons">
                        <LinkedInSvg className="dark-light-fill h-[23px] w-[23px]"/>
                    </div>
                </a>
            </li>
            <DarkLightButton/>
        </ul>


    </header>);
};

export default Header;


