import DarkLightButton from "./DarkLightButton.jsx";
import NotesSvg from "../../Assets/Svg/SvgComponents/NotesSvg";
import GithubSvg from "../../Assets/Svg/SvgComponents/GithubSvg";
import LinkedInSvg from "../../Assets/Svg/SvgComponents/LinkedinSvg";
import MenuDropDown from "./MenuDropDown";
import getInitialTheme from "../Util/themeSetter";
import {useEffect, useState} from "react";


const Header = () => {

    const [darkMode, setDarkMode] = useState(getInitialTheme());
    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            if (prev === "dark") {
                return "light"
            } else {
                return "dark"
            }
        })
    };
    useEffect(() => {
        document.body.className = darkMode
    }, [darkMode])


    return (
        <header className=" bg-primary_light/70 dark:bg-primary_dark/70 sticky top-0 z-2
        backdrop-blur-sm shadow-md backdrop-saturate-50">
            <div className="
    max-w-[52rem]
    mx-auto justify-between items-center p-2 px-8 max-sm:mr-4 flex ">

                <button className=" focus:outline-none  relative text-nowrap  w-56 h-12 text-xl
  text-primary_text_light
  hover:text-primary_hover_light
  dark:text-primary_text_dark
  dark:hover:text-primary_hover_dark
  group overflow-visible">
  <span className="absolute w-64 h-12
    bg-primary_icon_bg_hover_light
    dark:bg-gray-800
    group-hover:opacity-100 opacity-0
    transition-opacity duration-200 ease-in-out
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    transform -skew-x-12 shadow-md rounded-md">
  </span>
                    <span className="relative">
                        <a href="#" target="_blank">
                               Christopher Annunziato
                        </a>
  </span>
                </button>
                <MenuDropDown toggleDarkMode={toggleDarkMode} />
                <ul className="flex gap-3 max-sm:hidden  relative">
                    <li title="NotesSvg">
                        <a href="#" target="_blank" className="focus:outline-none">
                            <div className="navbar-icons pl-[2px]">
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
                        <a href="https://www.linkedin.com/in/cmannunziato/" target="_blank"
                           className="focus:outline-none">
                            <div className="navbar-icons">
                                <LinkedInSvg className="dark-light-fill h-[23px] w-[23px]"/>
                            </div>
                        </a>
                    </li>
                    <DarkLightButton toggleDarkMode = {toggleDarkMode} darkMode = {darkMode}/>
                </ul>
            </div>
        </header>
    )
}
export default Header;


