import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {HoverProvider} from "./Components/Util/HoverContext";
import WaveUnderlay from "./Components/Body/WaveUnderlay";
import Header from "./Components/HeaderFooter/Header";

function App() {
    return (
        <HoverProvider>
            <div className="relative h-screen w-screen bg-primary_light font-moderustic text-lg dark:bg-primary_dark">
                <WaveUnderlay/>
                <section>
                    <Header/>
                </section>
            </div>
        </HoverProvider>
    );
}

const container = document.getElementById("root");
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}