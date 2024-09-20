import Card from "./Card.jsx";
import { createContext, useContext, useState } from "react";
import HoverTopSvg from "./HoverTopSvg.jsx";
import Footer from "../HeaderFooter/Footer.jsx";
import { useFullHoverContext } from "../Util/HoverContext.jsx";
import Header from "../HeaderFooter/Header.jsx";
import profilePic from "../../Assets/Images/profilepic.jpg";

const BodyTop = () => {
  const { hoveredId, setHoveredId } = useFullHoverContext();
  return (
    <body className="h-full bg-primary_light pt-12 dark:bg-primary_dark z-50 border">
      <article className="mt-12 flex flex-col items-center justify-center gap-6 px-52 lg:min-w-[768px] lg:max-w-[1024px]">
        <div className="mx-12 flex flex-col">
          <div className="flex justify-center gap-10">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-3xl text-black dark:text-white">
                Christopher Annunziato
              </h2>
              <p className="pl-1 text-black dark:text-white">
                Fullstack Java Developer
              </p>
            </div>
            <img
              className="h-28 w-28 rounded-full border-2 border-gray-100 object-cover"
              src={profilePic}
            ></img>
          </div>

          <div className="mt-2 flex flex-col gap-y-4">
            <p className="text-xl font-[600] text-black dark:text-white">
              I'm a Philadelphia based Web Developer focused on launching my
              first fitness as a lifestyle application.
            </p>
            <p className="text-xl font-[600] text-black dark:text-white">
              Fitness encompasses quite a bit more than just lifting weights,
              especially as we age.
            </p>
            <p className="text-xl font-[600] text-black dark:text-white">
              Current platforms generally fail to address this.{" "}
            </p>
            <p className="text-xl font-[600] text-black dark:text-white">
              After multiple surgeries, the number of issues I had multiplied. I
              needed a better way to get back into shape. <span></span>
            </p>
          </div>
        </div>
      </article>
      <div className="ml-12 flex flex-col justify-start">
        <section className="text-primary_text_light dark:text-primary_text_dark">
          <div className="mr-24 flex h-[60px] items-center justify-between">
            <h1 className="text-4xl">Selected Work</h1>
            {hoveredId && <HoverTopSvg id={hoveredId} />}
          </div>
        </section>
        <div className="0 relative -ml-12 mt-6 flex h-72 justify-center gap-x-2">
          <Card name="Hello" id={1} />
          <Card name="Hell" id={2} />
          <Card name="He" id={3} />
        </div>
      </div>
    </body>
  );
};

export default BodyTop;
