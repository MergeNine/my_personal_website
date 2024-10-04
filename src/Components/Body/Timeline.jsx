import profilePic from "../../Assets/Images/profilepic.jpg";

const Timeline = () => {
    return (<div className="mx-12  flex flex-col gap-y-4 px-2  font-[600] text-black dark:text-neutral-300">
        <div className="inline-block">
            <span className="border-b-4 in border-light_accent dark:border-dark_accent text-xl">Bio</span>
        </div>
        <p className="flex flex-col gap-2 pr-14 font-normal text-primary_text_light dark:text-primary_text_dark">
            <ul className="">
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 flex-shrink-0 mr-4">1989</div>
                    <div className="flex-1">Born in Philly Suburbs.</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 flex-shrink-0 mr-4">2017</div>
                    <div className="flex-1">Masters in Chemistry at UPenn.</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 flex-shrink-0 mr-4">2019</div>
                    <div className="flex-1">Chemist in Drug-Discovery-Immunology</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 flex-shrink-0 mr-4">2022</div>
                    <div className="flex-1">Android Development</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 flex-shrink-0 mr-4">2024</div>
                    <div className="flex-1">Web Development</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 flex-shrink-0 mr-4">Present</div>
                    <div className="flex-1">React / Tailwind / Java</div>
                </li>
            </ul>
        </p>
    </div>)
}


export default Timeline