const Body = () => {
    return (<div className="pt-12 h-full ">
            <div className="flex flex-col justify-start ml-12 ">
                <section className="dark:text-primary_text_dark text-primary_text_light">
                    <h1 className="text-4xl">Selected Work</h1>
                </section>
                <div className="-ml-12 flex justify-center mt-6 0 h-72 ">
                    <button className=" relative h-72 w-52 border-[3px]
                    dark:border-primary_card_dark border-primary_card_light">
                        First
                        <div className=" absolute inset-0 p-[1px] ">
                            <div className="w-full h-full border-[3px] border-transparent
                            transition-colors duration-300 ease-in-out
                            hover:border-primary_card_light
                            dark:hover:border-primary_card_dark"></div>
                        </div>
                    </button>
                    <button className="relative group h-72 w-52 border-[3px] dark:border-primary_card_dark border-primary_card_light mx-[0.75rem]">
                        Second
                        <div className=" absolute inset-0 p-[1px] ">
                            <div className="w-full h-full border-[3px] border-transparent
                            transition-colors duration-300 ease-in-out
                            hover:border-primary_card_light
                            dark:hover:border-primary_card_dark"></div>
                        </div>
                    </button>
                    <button className="relative group h-72 w-52 border-[3px] dark:border-primary_card_dark border-primary_card_light">
                        Third
                        <div className=" absolute inset-0 p-[1px] ">
                            <div className="w-full h-full border-[3px] border-transparent
                            transition-colors duration-300 ease-in-out
                            hover:border-primary_card_light
                            dark:hover:border-primary_card_dark"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>)
}


export default Body;