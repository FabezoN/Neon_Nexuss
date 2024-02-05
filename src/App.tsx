import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './config/router';

const App = () => (
  <RouterProvider router={router} />
);

export default App;
