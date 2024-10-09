import catImage from "../../../Assets/Images/cat.jpg";
import HoverBottomSvg from "../../HeaderFooter/Secondary/HoverBottomSvg.jsx";
import { useFullHoverContext } from "../../Util/HoverContext.jsx";

const Card = ({ name, id }) => {
  const { hoveredId, setHoveredId } = useFullHoverContext();
  return (
    <div className="flex flex-col">
      <button
        className="relative h-72 w-52 border-primary_card_light transition duration-[400ms] ease-in-out dark:border-primary_card_dark"
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className="flex h-full flex-col">
          <div className="i h-2/3 border-[3px] border-b-[0px] border-primary_card_light dark:border-primary_card_dark">
            <img
              src={catImage}
              className="h-full w-full object-none"
              alt={name}
            />
          </div>
          <p className="h-1/3 border-[3px] border-primary_card_light dark:border-primary_card_dark">
            {name}
          </p>
        </div>
        <div className="absolute inset-0 p-[4px]">
          <div className="h-full w-full border-[3px] border-transparent transition duration-[200ms] ease-in-out hover:border-primary_card_light dark:hover:border-primary_card_dark"></div>
        </div>
      </button>
      {hoveredId === id && <HoverBottomSvg id={hoveredId} />}
    </div>
  );
};

{/*<div className="ml-12 flex flex-col justify-start">*/}
{/*  <section className="text-primary_text_light dark:text-primary_text_dark">*/}
{/*    <div className="mr-24 flex h-[60px] items-center justify-between">*/}
{/*      <h1 className="text-4xl">Selected Work</h1>*/}
{/*      {hoveredId && <HoverTopSvg id={hoveredId} />}*/}
{/*    </div>*/}
{/*  </section>*/}
{/*  <div className="0 relative -ml-12 mt-6 flex h-72 justify-center gap-x-2">*/}
{/*    <Card name="Hello" id={1} />*/}
{/*    <Card name="Hell" id={2} />*/}
{/*    <Card name="He" id={3} />*/}
{/*  </div>*/}
{/*</div>*/}

export default Card;
