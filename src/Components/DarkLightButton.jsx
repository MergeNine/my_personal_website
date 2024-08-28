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


    return (<button className="text-primary_text_light hover:text-primary_hover_light
                dark:hover:text-primary_hover_dark dark:text-primary_text_dark "
                    onClick={toggleDarkMode}
    >{darkMode ?
        (
        <svg className="fill-primary_icon_light dark:fill-primary_icon_dark
                        hover:fill-primary_hover_light dark:hover:fill-primary_hover_dark" xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 -960 960 960"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 140 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Z"/></svg>
        ) : (
        <svg className="fill-primary_icon_light dark:fill-primary_icon_dark translate-x-[-1px]
                        hover:fill-primary_hover_light dark:hover:fill-primary_hover_dark" xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 -960 960 960"><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Z"/></svg>
        )
    }
    </button>)
}


export default DarkLightButton;