import ReactDOM from 'react-dom/client';
import './styles.css';
import DarkLightButton from "./Components/DarkLightButton.jsx";
import WaveUnderlay from "./Components/WaveUnderlay.jsx";
import HeaderFooter from "./Components/HeaderFooter.jsx";


function App() {
    return (<div className={`relative h-screen bg-primary_light dark:bg-primary_dark font-moderustic text-lg`}>
        <WaveUnderlay/>
        <DarkLightButton/>
        <HeaderFooter/>
    </div>)
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);




