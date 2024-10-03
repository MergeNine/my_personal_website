import React from "react";
import {createRoot} from 'react-dom/client';
import "./styles.css";
import {HoverProvider} from "./Components/Util/HoverContext";
import WaveDivider from "./Components/Body/WaveDivider";
import Header from "./Components/HeaderFooter/Header";
import Test from "./Test/Test.jsx";
import Footer from "./Components/HeaderFooter/Footer";
import BodyBottom from "./Components/Body/BodyBottom";
import BodyTop from "./Components/Body/BodyTop";

function App() {
    // return (<Test/>)
    {/*<div className="absolute top-1/2 left-0 right-0 bg-red-500 h-px"></div>*/}
    {/*<div className="absolute top-0 bottom-0 left-1/2 bg-red-500 w-px"></div>*/}
    return (
        <HoverProvider>
            <main className="h-screen w-screen bg-primary_light font-moderustic text-lg dark:bg-primary_dark">
                    <Header/>
                    <BodyTop/>
                    <WaveDivider/>
                    <BodyBottom/>
                    <Footer/>
            </main>
        </HoverProvider>);

}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);