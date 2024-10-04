import profilePic from "../../Assets/Images/profilepic.jpg";

const Footer = () => {
  return (
    <footer className="py-6 flex items-center justify-center bg-primary_wave_light dark:bg-primary_wave_dark">
      <p className="text-sm text-black text-opacity-[0.35] dark:text-white dark:text-opacity-[0.35]">
        2024 CAnnunziato
      </p>
      {/*<nav className="flex gap-6 p-4 ml-3">*/}
      {/*    <button className="text-black dark:text-white text-primary_text_light hover:text-primary_hover_light*/}
      {/*        dark:hover:text-primary_hover_dark dark:text-primary_text_dark*/}
      {/*        ">&lt;Contact/&gt;</button>*/}
      {/*    <button className="text-black dark:text-white text-primary_text_light hover:text-primary_hover_light*/}
      {/*        dark:hover:text-primary_hover_dark dark:text-primary_text_dark*/}
      {/*        ">  &lt;About Me/&gt;</button>*/}
      {/*</nav>*/}
    </footer>
  );
};

export default Footer;
