import profilePic from "../../../Assets/Images/profilepic.jpg";
import Chemistry from "./Chemistry";

const Bio = () => {
    return (<div className="flex flex-col mx-12 gap-y-4 px-2 font-[600]
    text-black dark:text-neutral-300">
        <div className="inline-block">
            <span className="border-b-4 text-xl
            border-light_accent dark:border-dark_accent ">Bio</span>
        </div>

        <p className="flex flex-col gap-2 pr-14 font-normal
        text-primary_text_light dark:text-primary_text_dark">
            <ul>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">1989</div>
                    <div>Born in Media, PA</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">2012</div>
                    <div>Bachelors in Chemistry at Widener</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">2017</div>
                    <div>Masters in Chemistry at UPenn</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">2019</div>
                    <div>Chemist in Drug-Discovery-Immunology</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">2022</div>
                    <div>Android Development</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">2024</div>
                    <div>Web Development</div>
                </li>
                <li className="flex items-start mb-1">
                    <div className="font-semibold w-20 mr-2">Present</div>
                    <div>React / Tailwind / Java</div>
                </li>
            </ul>
        </p>
        <Chemistry/>
    </div>)
}


export default Bio