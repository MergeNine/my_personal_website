import React from 'react';
import catImage from '../Assets/Images/cat.jpg';

const Card = (props) => {
    const name = props.name

    return (
        <button className="relative h-72 w-52  dark:border-primary_card_dark border-primary_card_light">
            <div className="flex flex-col h-full">
                <div className="h-2/3 border-[3px] border-b-[0px]  dark:border-primary_card_dark border-primary_card_light ">
                    <img src={catImage} className="h-full w-full object-none" alt={name}/>
                </div>
                <p className="h-1/3 border-[3px] dark:border-primary_card_dark border-primary_card_light">
                    {name}
                </p>
            </div>
            <div className="absolute inset-0 p-[3px]">
                <div className="w-full h-full border-[3px] border-transparent
                        transition-colors duration-[400ms] ease-in-out
                        hover:border-primary_card_light
                        dark:hover:border-primary_card_dark"></div>
            </div>
        </button>
    )
}

export default Card;