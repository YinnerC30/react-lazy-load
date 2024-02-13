import App from '../App.js';
import { ErrorPage } from '../components/ErrorPage.js';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home.js';
import { Users } from '../components/Users.js';
import { About } from '../components/About.js';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage.js';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'shopping',
        element: <ShoppingPage />,
      },
    ],
  },
]);
