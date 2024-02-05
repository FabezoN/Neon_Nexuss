import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Morpion from '../pages/Morpion';
import Pendu from '../pages/Pendu';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/morpion',
    element: <Morpion />,
  },
  {
    path: '/pendu',
    element: <Pendu/>
    }
]);

export default router;
