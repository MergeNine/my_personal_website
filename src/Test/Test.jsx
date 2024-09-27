import {useState} from "react";

const Test = () => {


    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    // const menuItems = [
    //     { icon: label: ""}
    // ]


    return (<div className="h-screen w-screen flex justify-center items-center border bg-gray-300">

            <button className="h-10 w-24 bg-amber-600 rounded-md mb-1 text-center leading-loose "
            onClick={handleOpen}>Open Me</button>
            {open ?
                <ul className="bg-amber-300">
                    <li className="h-10 w-24 bg-amber-600 rounded-md mb-1 text-center leading-loose ">One</li>
                    <li className="h-10 w-24 bg-amber-600 rounded-md mb-1 text-center leading-loose ">Two</li>
                    <li className="h-10 w-24 bg-amber-600 rounded-md mb-1 text-center leading-loose ">Three</li>
                    <li className="h-10 w-24 bg-amber-600 rounded-md mb-1 text-center leading-loose ">Four</li>

                </ul>
                : null}
    </div>)

    // return (< div className="flex h-screen w-screen bg-neutral-400 justify-center items-center">
    //     < button className="h-9 w-24 bg-amber-300" onClick={handleOpen}> Burger< /button>
    //     {open ? <ul>
    //         <li >
    //             <a href="www.google.com"
    //                className="block bg-indigo-500 h-9 w-24 mb-1 rounded-md text-center leading-loose"
    //                onClick={() => setOpen(false)}>
    //                 sdfsda
    //             </a>
    //         </li>
    //         <li className="bg-indigo-500 h-9 w-24 rounded-md mb-1 text-center leading-loose  ">
    //             <button className="" onClick={() => setOpen(false)}>Item2</button>
    //         </li>
    //         <li className="bg-indigo-500 h-9 w-24 rounded-md mb-1 text-center leading-loose  ">Item 3</li>
    //         <li className="bg-indigo-500 h-9 w-24 rounded-md mb-1 text-center leading-loose  ">Item 4</li>
    //     </ul> : null}
    // </div>)
    //
}


export default Test;