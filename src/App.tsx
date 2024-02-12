import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './config/router';
import { StatsProvider } from "./components/StatsContext"; // Importez StatsProvider, pas StatsContext


const App = () => (
    <StatsProvider>
        <RouterProvider router={router} />
    </StatsProvider>
);

export default App;
