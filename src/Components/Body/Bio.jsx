import profilePic from "../../Assets/Images/profilepic.jpg";
import Chemistry from "./Chemistry";

const Bio = () => {
    return (
        <div className="mx-auto sm:px-8 sm:max-w-2xl">
            <div className=" flex flex-col mx-12 gap-y-4 font-[600] px-2
    text-black dark:text-neutral-300">

                <div className="inline-block">
            <span className="border-b-4 sm:text-xl text-lg
            border-light_accent dark:border-dark_accent ">Bio</span>
                </div>

                <p className="gap-2  font-normal border  max-w-[435px] sm:max-w-[435px]
        text-primary_text_light dark:text-primary_text_dark">
                    <ul>
                        <li className="flex items-start mb-1">
                            <div className="font-semibold w-20 mr-2">1989</div>
                            <div>Born in Media, PA</div>
                        </li>
                        <li className="flex items-start mb-1">
                            <div className="font-semibold w-20 mr-2">2012</div>
                            <div>B.S.Chemistry at Widener</div>
                        </li>
                        <li className="flex items-start mb-1">
                            <div className="font-semibold w-20 mr-2">2017</div>
                            <div>M.S. in Chemistry at UPenn</div>
                        </li>
                        <li className="flex items-start mb-1">
                            <div className="font-semibold w-20 mr-2">2019</div>
                            <div>Chemist in Drug-Discovery</div>
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
                            <div className="">React · Tailwind · Java · Spring</div>
                        </li>
                    </ul>
                </p>
                <Chemistry/>
            </div>
        </div>)
}


export default Bio