import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Morpion from '../pages/Morpion';
import Pendu from '../pages/Pendu';
import Statistique from '../pages/Statistique';

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
    element: <Pendu />
  },
  {
    path: '/statistique',
    element: <Statistique />
  }
]);

export default router;
