import profilePic from "../../Assets/Images/profilepic.jpg";

const Timeline = () => {
    return (<div className="mx-12  flex flex-col gap-y-4 px-2  font-[600] text-black dark:text-neutral-300">
        <div className="inline-block">
            <span className="border-b-4 in border-light_accent dark:border-dark_accent">Bio</span>
        </div>
        <p className="flex flex-col gap-2 pr-14 font-normal text-primary_text_light dark:text-primary_text_dark">
            <span>I'm a Philadelphia-based web developer currently working on an exciting idea:</span>
            <span>A fractal and algorithm path visualizer.</span>
            <span>As a former chemist, I'm interested in nature and its imperfections, as well as layering ideas and experimenting with web technology.</span>
            <span>My goal is to find the shortest path through several imperfect fractals (those with omissions, additions, and cross-linkages) using search algorithms.</span>
        </p>
    </div>)
}


export default Timeline