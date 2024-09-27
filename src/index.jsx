import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles.css";
import {HoverProvider} from "./Components/Util/HoverContext";
import WaveUnderlay from "./Components/Body/WaveUnderlay";
import Header from "./Components/HeaderFooter/Header";
import Test from "./Test/Test.jsx";
import Footer from "./Components/HeaderFooter/Footer";

function App() {
    // return (<Test/>)

    return(
        // <Test/>
        <HoverProvider>
            <div className="relative h-screen w-screen
            bg-primary_light font-moderustic text-lg dark:bg-primary_dark">
                <WaveUnderlay/>
                {/*<div className="absolute top-1/2 left-0 right-0 bg-red-500 h-px"></div>*/}
                {/*<div className="absolute top-0 bottom-0 left-1/2 bg-red-500 w-px"></div>*/}
                <section className="flex flex-col max-w-5xl mx-auto ">
                    <Header/>

                </section>
            </div>
        </HoverProvider>
    );

}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);