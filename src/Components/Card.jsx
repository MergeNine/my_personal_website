
const Card = (props) => {

    const name = props.name

    return (
        <button className=" relative h-72 w-52 border-[3px]
                    dark:border-primary_card_dark border-primary_card_light">
            {name}
            <div className=" absolute inset-0 p-[1px] ">
                <div className="w-full h-full border-[3px] border-transparent
                            transition-colors duration-300 ease-in-out
                            hover:border-primary_card_light
                            dark:hover:border-primary_card_dark"></div>
            </div>
        </button>
    )
}


export default Card;