import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
    return (
    <p className="text-6xl text-gray-500">Hello, World!</p>
    )
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
