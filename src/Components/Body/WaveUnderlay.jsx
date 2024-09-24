import WaveUnderlaySvg from "../../Assets/Svg/SvgComponents/WaveUnderlaySvg";

const WaveUnderlay = () => {
  return (
    <div id="waveOverlay" className="absolute flex h-screen w-screen flex-col ">
      <div className="h-[50vh]"></div>
      <section className="relative mt-40 -mb-1">
          <WaveUnderlaySvg className="h-auto w-screen
          fill-primary_wave_light dark:fill-primary_wave_dark"/>
      </section>
      <div className="relative h-[50vh] bg-primary_wave_light dark:bg-primary_wave_dark"></div>
    </div>
  );
};

export default WaveUnderlay;
