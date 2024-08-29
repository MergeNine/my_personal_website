import {useEffect, useState} from "react";


const WaveUnderlay = () => {

    const [waveUnderlayState, setWaveUnderlay] = useState(true)
    const toggleWaveUnderlay = () => {
        setWaveUnderlay(!waveUnderlayState)
    };

    useEffect(() => {
        const waveElement = document.getElementById("waveOverlay")
        if (waveElement) {
            waveElement.setAttribute("hidden", waveUnderlayState.toString())
        }
    }, [waveUnderlayState]);


    return (<div id="waveOverlay" className="absolute border flex flex-col h-screen w-screen ">
        <div className="h-[50vh]">
        </div>
        <section className="relative 0">

            <svg className=" fill-primary_wave_light dark:fill-primary_wave_dark" width="100%" height="auto" viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" ></path>
            </svg>
        </section>
        <div className="relative h-[50vh] -m-2 bg-primary_wave_light dark:bg-primary_wave_dark">
        </div>


    </div>)
}


export default WaveUnderlay;
