import Header from "../HeaderFooter/Header.jsx";
import Footer from "../HeaderFooter/Footer.jsx";
import BodyTop from "./BodyTop.jsx";
import WaveUnderlay from "./WaveUnderlay.jsx";

const MainSection = () => {
  return (
    <section className="r bg-primary_light text-black dark:bg-primary_dark dark:text-white">
      <Header />
      <BodyTop />
      <Footer />
    </section>
  );
};

export default MainSection;
