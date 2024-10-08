import Card from "./Secondary/Card.jsx";
import {createContext, useContext, useState} from "react";
import HoverTopSvg from "./Secondary/HoverTopSvg.jsx";
import Footer from "../HeaderFooter/Footer.jsx";
import {useFullHoverContext} from "../Util/HoverContext.jsx";
import Header from "../HeaderFooter/Header.jsx";
import profilePic from "../../Assets/Images/profilepic.jpg";

const BodyTop = () => {
    const {hoveredId, setHoveredId} = useFullHoverContext();
    return (
        <article className=" bg-primary_light dark:bg-primary_dark">
            <div className=" max-w-5xl mx-auto bg-primary_light pt-12 dark:bg-primary_dark  ">
                <div
                    className=" flex flex-col items-center justify-center gap-6 px-52 lg:min-w-[768px] lg:max-w-[1024px]">
                    <div className="mx-12 flex flex-col">
                        <div className=" flex items-start justify-between ">
                            <div className="flex flex-col items-start justify-center">
                                <h2 className="text-3xl text-black dark:text-white">
                                    Christopher Annunziato
                                </h2>
                                <p className="pl-1 text-black dark:text-white">
                                    Fullstack React Java Developer
                                </p>
                            </div>
                            <img
                                className="h-24 w-24 rounded-full object-cover ring-2 mr-10
                        dark:ring-primary_text_dark ring-primary_text_light"
                                src={profilePic}
                            />
                        </div>

                        <div className="mt-2 flex flex-col gap-y-4 px-2  font-[600] text-black dark:text-neutral-300">
                            <div className="inline-block">
                                <span className="border-b-4 in border-light_accent dark:border-dark_accent text-xl">What I'm Up To</span>
                            </div>
                            <p className="flex flex-col gap-2 pr-14 font-normal text-primary_text_light dark:text-primary_text_dark">
                                <span>I'm working on an idea im very excited about bringing to life. A fractal-algorithm path visualizer.</span>
                                <span>As a former chemist, I'm interested in nature and its imperfections, as well as layering ideas and experimenting with web technology.</span>
                                <span>My goal is to find the shortest path through several imperfect fractals (those with omissions, additions, and cross-linkages) using search algorithms.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </article>);
};

export default BodyTop;


