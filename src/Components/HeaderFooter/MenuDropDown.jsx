import {useEffect, useRef, useState} from "react";
import MenuIconSvg from "../../Assets/Svg/SvgComponents/MenuIconSvg";


const MenuDropDown = ({toggleDarkMode}) => {

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
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])


    return (<button
            onClick={() => {
                setOpen(!open)
            }}
            ref={dropdownRef}
            className={`relative sm:hidden navbar-icons h-12 w-12
        hover:text-inherit focus:outline-none outline-none text-primary_text_light dark:text-primary_text_dark
        ${open ? ' bg-primary_icon_bg_hover_light dark:bg-gray-800' : ''}`}
        >
            <MenuIconSvg className="dark-light-fill h-[30px] w-[30px]  "/>
            {open ? (<div
                className="absolute rounded-md transition-all ease-in-out duration-150 opacity-100 scale-100
                    top-1/2 left-1/2 -translate-x-[6.2rem] translate-y-1/4 -mt-3
                    bg-primary_icon_bg_hover_light dark:bg-gray-800 py-2 px-1.5 w-32">
                <ul className="flex flex-col gap-2">
                    <a href="#" target="_blank">
                        <li className="flex justify-left  p-1.5  items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Notes</div>
                        </li>
                    </a>
                    <a href="https://github.com/MergeNine" target="_blank">
                        <li className="flex justify-left  p-1.5  items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Github</div>
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/cmannunziato/" target="_blank">
                        <li className="flex justify-left  p-1.5 items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Linkedin</div>
                        </li>
                    </a>
                        <li onClick={toggleDarkMode} className="flex justify-left p-1.5   items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Theme</div>
                        </li>
                </ul>
            </div>) : (<div
                className="absolute rounded-md transition-all ease-in-out duration-150 opacity-0 scale-0
                    top-1/2 left-1/2 -translate-x-[6.2rem] translate-y-1/4 -mt-3
                    bg-primary_icon_bg_hover_light dark:bg-gray-800 py-2 px-1.5 w-32">
                <ul className="flex flex-col gap-2">
                    <a href="#" target="_blank">
                        <li className="flex justify-left  p-1.5  items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Notes</div>
                        </li>
                    </a>
                    <a href="https://github.com/MergeNine" target="_blank">
                        <li className="flex justify-left  p-1.5  items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Github</div>
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/cmannunziato/" target="_blank">
                        <li className="flex justify-left   p-1.5 items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Linkedin</div>
                        </li>
                    </a>
                        <li onClick={toggleDarkMode} className="flex justify-left p-1.5   items-center h-9 w-30
                    hover:bg-primary_dropdown_light dark:bg-primary_dropdown_dark rounded-sm
                    hover:bg-primary_dropdown_hover_light hover:dark:bg-primary_dropdown_hover_dark">
                            <div>Theme</div>
                        </li>
                </ul>
            </div>)}
        </button>

    )
}
export default MenuDropDown








