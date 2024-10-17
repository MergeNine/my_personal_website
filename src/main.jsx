import React from "react";
import {createRoot} from 'react-dom/client';
import "./styles.css";
import {HoverProvider} from "./Components/Util/HoverContext";
import WaveDivider from "./Components/Body/WaveDivider";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import BodyBottom from "./Components/Body/BodyBottom";
import BodyTop from "./Components/Body/BodyTop";

function App() {

    return (<HoverProvider>
        <main className="font-moderustic text-lg bg-primary_light dark:bg-primary_dark  min-h-[100vh]">
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