import {useHoveredIdOnly} from "../HoverContext.js"

const Footer = () => {
    const hoveredId = useHoveredIdOnly();
    let result;
    switch (hoveredId) {
        case 1: {
            result = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc Hieronymus"
            break;
        }
        case 2: {
            result = "summum bonum esse dixit. Quo plebiscito decreta a senatu est consuli quaestio"
            break;
        }
        case 3: {
            result = "enim hic etiam dolore. Quantum Aristoxeni ingenium consumptum videmus in"
            break;
        }
        default: {
            result = ""
            break;
        }
    }
    return (
        <footer className="relative h-[50vh] w-screen flex flex-col justify-between items-center">
            <section className="mt-20">
                <p>{result}</p>
            </section>
            <nav className="flex gap-6 p-4 ml-3">
                <button className="text-black dark:text-white text-primary_text_light hover:text-primary_hover_light
                dark:hover:text-primary_hover_dark dark:text-primary_text_dark
                ">&lt;Contact/&gt;</button>
                <button className="text-black dark:text-white text-primary_text_light hover:text-primary_hover_light
                dark:hover:text-primary_hover_dark dark:text-primary_text_dark
                ">  &lt;About Me/&gt;</button>
            </nav>
        </footer>)
}


export default Footer;