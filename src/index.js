import ReactDOM from 'react-dom/client';
import './styles.css';
import {useState, useEffect} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode])

    return (<div className={`h-screen bg-amber-300 dark:bg-root_dark`}>
        <button className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-300 text-black
            dark:bg-black rounded-full dark:text-white"
                onClick={toggleDarkMode}
        >{darkMode ? "Dark" : "Light"}</button>
    </div>)
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);




