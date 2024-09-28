import {useEffect, useRef, useState} from "react";
import NotesSvg from "../../Assets/Svg/SvgComponents/NotesSvg";
import GithubSvg from "../../Assets/Svg/SvgComponents/GithubSvg";
import LinkedinSvg from "../../Assets/Svg/SvgComponents/LinkedinSvg";
import DarkButtonSvg from "../../Assets/Svg/SvgComponents/DarkButtonSvg";
import MenuIconSvg from "../../Assets/Svg/SvgComponents/MenuIconSvg";


const MenuDropDown = () => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }


        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener(('mousedown', handleClick))
        }
    }, [])


    return (<button onClick={() => setOpen(!open)} ref={dropdownRef} className="relative sm:hidden navbar-icons h-12 w-12 focus:outline-none ">
                <MenuIconSvg className=" dark-light-fill h-[30px] w-[30px]  "/>
            {open ? (<div className=" rounded-md absolute top-1/2 left-1/2 -translate-x-[6rem] translate-y-1/4 -mt-1 ">
                <ul className="flex flex-col gap-2">
                    <li className="flex justify-left p-2 pl-2 items-center gap-2 h-9 w-30 bg-amber-300 rounded-sm ">
                        <div>Linkedin</div>
                        <GithubSvg/>
                    </li>
                    <li className="flex justify-left p-2 pl-2 items-center gap-2 h-9 w-30 bg-amber-300 rounded-sm ">
                        <div>Linkedin</div>
                        <GithubSvg/>
                    </li>
                    <li className="flex justify-left p-2 pl-2 items-center gap-2 h-9 w-30 bg-amber-300 rounded-sm ">
                        <div>Linkedin</div>
                        <GithubSvg/>
                    </li>
                    <li className="flex justify-left p-2 pl-2 items-center gap-2 h-9 w-30 bg-amber-300 rounded-sm ">
                        <div>Linkedin</div>
                        <GithubSvg/>
                    </li>
                </ul>
            </div>) : null}
        </button>

    )
}
export default MenuDropDown








