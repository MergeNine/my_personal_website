import {useState} from "react";
import NotesSvg from "../../Assets/Svg/SvgComponents/NotesSvg";
import GithubSvg from "../../Assets/Svg/SvgComponents/GithubSvg";
import LinkedinSvg from "../../Assets/Svg/SvgComponents/LinkedinSvg";
import DarkButtonSvg from "../../Assets/Svg/SvgComponents/DarkButtonSvg";
import MenuIconSvg from "../../Assets/Svg/SvgComponents/MenuIconSvg";


const MenuDropDown = () => {
    const [open, setOpen] = useState(false)

    // const menuItem = [
    //     {icon: NotesSvg, label: "Notes"},
    //     {icon: GithubSvg, label: "Notes"},
    //     {icon: LinkedinSvg, label: "Notes"},
    //     {icon: DarkButtonSvg, label: "Notes"},
    // ]
    //
    return (
        <div className="sm:hidden ">
                <button onClick={() => setOpen(!open)} className="focus:outline-none block">
                    <MenuIconSvg className="dark-light-fill h-[30px] w-[30px] sm:hidden"/>
                </button>
            {open ? (<div className="border absolute right-0 left-0 translate-y-1/2 -translate-x-1/2 mt-2">
                    <ul>
                        <li className="flex h-9 w-24 bg-amber-300">
                            <div>Name</div>
                            <div>Icon</div>
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>

    )
}
            export default MenuDropDown








