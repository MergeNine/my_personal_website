import DarkLightButton from "./DarkLightButton.jsx";
import NotesSvg from "../../Assets/Svg/SvgComponents/NotesSvg";
import GithubSvg from "../../Assets/Svg/SvgComponents/GithubSvg";
import LinkedInSvg from "../../Assets/Svg/SvgComponents/LinkedinSvg";


const Header = () => {
    return (<header className=" text-black dark:text-white
    sticky flex">
        <nav className="flex items-center mx-6 p-6 sm:max-w-4xl justify-between w-full">
            <button className="relative text-nowrap  w-56 text-xl text-primary_text_light
  hover:text-primary_hover_light
  dark:text-primary_text_dark dark:hover:text-primary_hover_dark
  group overflow-visible">
  <span className="absolute z-0 w-64 h-12
    bg-gray-800 group-hover:opacity-100 opacity-0
    transition-opacity duration-200 ease-in-out
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    transform -skew-x-12 shadow-md rounded-md">
  </span>
                <span className="relative z-10">
    Christopher Annunziato
  </span>
            </button>

            <ul className="flex item gap-3">
                <li title="NotesSvg">
                    <div className="navbar-icons pl-[1px]">
                        <NotesSvg className="fill-primary_icon_light dark:fill-primary_icon_dark h-[23px] w-[23px]"/>
                    </div>
                </li>

                <li title="Github">
                    <a href="https://github.com/MergeNine" target="_blank">
                        <div className="navbar-icons">
                            <GithubSvg className="fill-primary_icon_light dark:fill-primary_icon_dark h-[23px] w-[23px]"/>
                        </div>

                    </a>
                </li>

                <li title="Linkedin">
                    <a href="https://www.linkedin.com/in/cmannunziato/" target="_blank">
                        <div className="navbar-icons">
                            <LinkedInSvg className="fill-primary_icon_light dark:fill-primary_icon_dark h-[23px] w-[23px]"/>
                        </div>
                    </a>
                </li>
                <DarkLightButton/>
            </ul>
        </nav>
    </header>);
};

export default Header;


