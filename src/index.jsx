import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles.css";
import {HoverProvider} from "./Components/Util/HoverContext";
import WaveUnderlay from "./Components/Body/WaveUnderlay";
import Header from "./Components/HeaderFooter/Header";
import Test from "./Components/Test.jsx";

function App() {
    // return (<Test/>)

    return(
        <HoverProvider>
            <div className="relative h-screen w-screen
            bg-primary_light font-moderustic text-lg dark:bg-primary_dark">
                <WaveUnderlay/>
                <section className="sm:max-w-[75%] mx-auto">
                    <Header/>
                </section>
            </div>
        </HoverProvider>
    );

}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);