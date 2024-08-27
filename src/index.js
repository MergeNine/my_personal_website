import ReactDOM from 'react-dom/client';
import './styles.css';
import {useState, useEffect} from "react";
import HeaderFooter from "./Components/HeaderFooter.jsx";
import setTheme from "./themeSetter";


function App() {
    const [darkMode, setDarkMode] = useState(setTheme);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode])

    return (<div className={`h-screen bg-primary_light dark:bg-primary_dark  font-moderustic text-lg`}>
        <button className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-300 text-black
            dark:bg-black rounded-full dark:text-white"
                onClick={toggleDarkMode}
        >{darkMode ? "Dark" : "Light"}
        </button>

        <HeaderFooter/>
    </div>)
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);




