import ReactDOM from 'react-dom/client';
import './styles.css';
import WaveUnderlay from "./Components/WaveUnderlay.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
    return (<div className={`relative h-screen bg-primary_light dark:bg-primary_dark 
    font-moderustic text-lg`}>
        <WaveUnderlay/>
        <Header/>
        <Footer/>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-black"></div>
    </div>)
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);


