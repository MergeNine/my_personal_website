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

    </div>)
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);




