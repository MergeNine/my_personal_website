import Card from "./Card.jsx";

const Body = () => {
    return (<div className="pt-12 h-full ">
        <div className="flex flex-col justify-start ml-12 ">
            <section className="dark:text-primary_text_dark text-primary_text_light">
                <h1 className="text-4xl">Selected Work</h1>
            </section>
            <div className="-ml-12 flex justify-center mt-6 0 h-72 gap-x-2 ">
                <Card name="Hello"/>
                <Card name="Two"/>
                <Card name="Three"/>
            </div>
        </div>
    </div>)
}


export default Body;