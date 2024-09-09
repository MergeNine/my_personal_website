import Card from "./Card.jsx";
import {createContext, useContext, useState} from "react";
import HoverTopSvg from './HoverTopSvg.jsx';
import Footer from "./Footer.jsx";
import {useFullHoverContext} from "../HoverContext.js";


const Body = () => {
    const {hoveredId, setHoveredId} = useFullHoverContext()
    return (
        <div className="pt-12 h-full">
            <div className="flex flex-col justify-start ml-12 ">
                <section className="dark:text-primary_text_dark text-primary_text_light">
                    <div className="flex justify-between items-center mr-24 h-[60px] ">
                        <h1 className="text-4xl ">Selected Work</h1>
                        {hoveredId && <HoverTopSvg id={hoveredId}/>}
                    </div>
                </section>
                <div className="relative -ml-12 flex justify-center mt-6 0 h-72 gap-x-2 ">
                    <Card name="Hello" id={1}/>
                    <Card name="Hell" id={2} />
                    <Card name="He" id={3} />
                </div>
            </div>
        </div>)
}


export default Body;