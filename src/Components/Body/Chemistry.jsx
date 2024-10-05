import PiperdineureaDark from "../../Assets/Svg/SvgComponents/PiperdineureaDark";
import DifluoroDark from "../../Assets/Svg/SvgComponents/DifluoroDark";

const Chemistry = () => {
    return (<section className="mt-4 font-normal">
        <div className="mb-4">

            <div className="inline-block mb-4">
            <span className="border-b-4 text-xl font-semibold
            border-light_accent dark:border-dark_accent ">Showcase</span>
            </div>

            <p>Before I programmed web apps, I made molecules.</p>
            <p>Here's two I made while working at Bristol Myers Squibb.</p>
        </div>

        <div className="flex flex-col">
            <div className="">
                <p className="flex gap-2 py-2"><span className="font-semibold">Macrocycle:</span> Patent No.
                    <a href="https://patents.google.com/patent/US20230203039A1/en?oq=Patent+No.+US20230203039A1"
                       target="_blank">
                        <span className="underline underline-offset-2">US20230203039A1</span>
                    </a>
                </p>
                <DifluoroDark className="h-44 w-auto pl-4
                fill-light_molecule dark:fill-dark_molecule"/>
            </div>

            <div className="">
                <p className="flex gap-2 py-2"><span className="font-semibold">Piperdine:</span> Patent No.
                    <a href="https://patents.google.com/patent/WO2020033488A1/en" target="_blank">
                        <span className="underline underline-offset-2">WO2020033488A1</span>
                    </a>
                </p>
                <PiperdineureaDark className="h-44 w-auto pl-4
                 fill-light_molecule dark:fill-dark_molecule"/>
            </div>

        </div>
    </section>)
}


export default Chemistry