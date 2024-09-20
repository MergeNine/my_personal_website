const WaveUnderlay = () => {
  return (
    <div id="waveOverlay" className="absolute flex h-screen w-screen flex-col">
      <div className="h-[50vh]"></div>
      <section className="relative mt-40">
        <svg
          className="h-auto w-screen fill-primary_wave_light dark:fill-primary_wave_dark"
          viewBox="0 0 1440 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
        </svg>
      </section>
      <div className="relative h-[50vh] bg-primary_wave_light dark:bg-primary_wave_dark"></div>
    </div>
  );
};

export default WaveUnderlay;
