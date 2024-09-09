const Footer = () => {
    return (

        <footer className="relative h-[50vh] w-screen flex justify-center items-end">
            <nav className="flex gap-6 mr-[3px]">
                <button className="text-black dark:text-white text-primary_text_light hover:text-primary_hover_light
                dark:hover:text-primary_hover_dark dark:text-primary_text_dark
                ">&lt;Contact/&gt;</button>
                <button className="text-black dark:text-white text-primary_text_light hover:text-primary_hover_light
                dark:hover:text-primary_hover_dark dark:text-primary_text_dark
                ">  &lt;About Me/&gt;</button>
            </nav>
        </footer>



    )
}


export default Footer;