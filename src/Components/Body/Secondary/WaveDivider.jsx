import WaveDividerSvg from "../../../Assets/Svg/SvgComponents/WaveDividerSvg";

const WaveDivider = () => {
    return (<div className="-mb-1 h-[100px] overflow-hidden bg-gunmetal-50">
            <WaveDividerSvg className="stroke-none h-full w-full
            fill-primary_light dark:fill-primary_dark bg-primary_wave_light dark:bg-primary_wave_dark"
            />
        </div>
        // <div id="waveOverlay" className="absolute flex h-screen w-screen flex-col ">
        //     <div className="h-[50vh]"></div>
        //     <section className="relative mt-40 -mb-1">
        //         <WaveUnderlaySvg className="h-auto w-screen
        //         fill-primary_wave_light dark:fill-primary_wave_dark"/>
        //     </section>
        //     <div className="relative h-[50vh] bg-primary_wave_light dark:bg-primary_wave_dark"></div>
        // </div>
    );
};

export default WaveDivider;
