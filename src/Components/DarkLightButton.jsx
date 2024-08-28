import {useEffect, useState} from "react";
import setTheme from "./themeSetter";


const DarkLightButton = () => {
    const [darkMode, setDarkMode] = useState(setTheme());
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode]);


    return (<button className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-300 text-black
            dark:bg-black rounded-full dark:text-white"
                    onClick={toggleDarkMode}
    >{darkMode ? "Dark" : "Light"}
    </button>)
}


export default DarkLightButton;