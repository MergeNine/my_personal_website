import {FaFire, FaPoo} from 'react-icons/fa';
import {BsFillLightningFill, BsPlus} from "react-icons/bs";

const Test = () => {
    return (

        <div className="flex">
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
                <SideBarIcon icon={<FaFire size="28"/>} text="Hello"/>
                <SideBarIcon icon={<BsPlus size="32"/>} text="Hello"/>
                <SideBarIcon icon={<BsFillLightningFill size="20"/>} text="Hello"/>
                <SideBarIcon icon={<FaPoo size="20"/>} text="Hello"/>
            </div>
        </div>)
}


const SideBarIcon = ({icon, text}) => (<div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
</div>)
export default Test;