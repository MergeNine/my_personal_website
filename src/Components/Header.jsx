import DarkLightButton from "./DarkLightButton.jsx";
import Body from "./Body.jsx";


const Header = () => {
    return (
            <header className="relative w-full flex flex-col
            text-black dark:text-white p-4 h-[50vh] lg:max-w-[1024px] lg:min-w-[768px] mx-auto">
                <nav className=" flex justify-between items-center">
                        <button className="text-primary_text_light hover:text-primary_hover_light
                dark:hover:text-primary_hover_dark dark:text-primary_text_dark ">
                            Chris Annunziato
                        </button>
                    <ul className="flex space-x-6">
                        <li title="Notes">
                            <svg className="fill-primary_icon_light dark:fill-primary_icon_dark
                         hover:fill-primary_hover_light dark:hover:fill-primary_hover_dark" height="25px" width="25px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                <path d="M57.407,35.724l-2.85-2.85c-1.128-1.127-3.092-1.127-4.221,0L34.946,48.265l-2.121,7.779l-0.519,0.c-0.388,0.388-0.389,1.014-0.006,1.405l-0.005,0.02l0.019-0.005c0.194,0.191,0.446,0.288,0.699,0.c0.256,0,0.512-0.098,0.707-0.293l0.52-0.52l7.778-2.121l15.39-15.391C58.572,38.781,58.572,36.888,57.407,35.724z M37.255,48.10.243-10.243l4.243,4.243L41.498,53.027L37.255,48.784z M36.352,50.71l3.22,3.22l-4.428,1.208L36.352,50.71z M55.993,38.531 l-2.839,2.839l-4.243-4.242l2.839-2.839c0.373-0.373,1.022-0.372,1.394-0.001l2.85,2.85C56.378,37.521,56.378,38.147,55.993,38.531z"/>
                                <path d="M18.719,22h20V12h-20V22z M21.719,14h14v2h-14V14z M21.719,18h14v2h-14V18z"/>
                                <path d="M47.719,31.249V0h-36h-10v60h10h16.916l3.625-13.293L47.719,31.249z M9.719,58h-6V2h6V58z M16.719,24V10h24v14H16.719z"/>
                            </svg>
                        </li>
                        <li title="Github">
                            <a href="https://github.com/MergeNine" target="_blank">
                                <svg className="fill-primary_icon_light dark:fill-primary_icon_dark
                         hover:fill-primary_hover_light dark:hover:fill-primary_hover_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="25" height="25">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                            </a>
                        </li>
                        <li title="Linkedin">
                            <a href="https://www.linkedin.com/in/cmannunziato/" target="_blank">
                                <svg className="fill-primary_icon_light dark:fill-primary_icon_dark
                         hover:fill-primary_hover_light dark:hover:fill-primary_hover_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="25" width="25">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <DarkLightButton/>
                        </li>
                    </ul>
                </nav>
                    <Body/>
            </header>
    )
}


export default Header;
