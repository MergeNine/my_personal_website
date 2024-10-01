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
    <div className="bg-primary_light pt-12 dark:bg-primary_dark z-50 border">
      <article className=" flex flex-col items-center justify-center gap-6 px-52 lg:min-w-[768px] lg:max-w-[1024px]">
        <div className="mx-12 flex flex-col">
          <div className="flex justify-between gap-10">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-3xl text-black dark:text-white">
                Christopher Annunziato
              </h2>
              <p className="pl-1 text-black dark:text-white">
                Fullstack React Java Developer
              </p>
            </div>
            <img
              className="h-28 w-28 rounded-full border-2 border-gray-100 object-cover"
              src={profilePic}
            ></img>
          </div>

          <div className="mt-2 flex flex-col gap-y-4 px-2  font-[600] text-black dark:text-neutral-300">
            <p className="">
              I'm a Philadelphia based developer.
            </p>
            <p className="">
              My goal is to develop fullstack web applications.
            </p>
            <p className="">
              I'm currently working on an idea im very excited about.
              <br/>
              A Fractal // Algorithm path visualizer.
            </p>
            <p className="">
              I'm interested to see what happens when i put all these pieces together, because being a chemist
              I'm interested in nature and its imperfections and in general stacking ideas and experimenting.
            </p>
            <p className="">
              The goal is to do something novel, to push myself and in my ability to generate fullstack web applications.
              The idea is to show the shortest path of different "natural" fractals via a search algorithm.
            </p>
            <p className="">
              React // Tailwind // Java is my stack of choice.
            </p>
          </div>
        </div>
      </article>

      {/*<div className="ml-12 flex flex-col justify-start">*/}
      {/*  <section className="text-primary_text_light dark:text-primary_text_dark">*/}
      {/*    <div className="mr-24 flex h-[60px] items-center justify-between">*/}
      {/*      <h1 className="text-4xl">Selected Work</h1>*/}
      {/*      {hoveredId && <HoverTopSvg id={hoveredId} />}*/}
      {/*    </div>*/}
      {/*  </section>*/}
      {/*  <div className="0 relative -ml-12 mt-6 flex h-72 justify-center gap-x-2">*/}
      {/*    <Card name="Hello" id={1} />*/}
      {/*    <Card name="Hell" id={2} />*/}
      {/*    <Card name="He" id={3} />*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  );
};

export default BodyTop;
