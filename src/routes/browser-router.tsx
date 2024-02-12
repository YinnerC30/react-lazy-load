import { lazy } from 'react';
import App from '../App.js';
import { ErrorPage } from '../components/ErrorPage.js';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home.js';
import { Users } from '../components/Users.js';
import { About } from '../components/About.js';
import NoLazyLayout from '../components/NoLazyLayout.js';
import LazyPage1 from '../01-lazyload/pages/LazyPage1.js';
import LazyPage3 from '../01-lazyload/pages/LazyPage3.js';
import LazyPage2 from '../01-lazyload/pages/LazyPage2.js';
// import { LazyLayout } from '../components/LazyLayout.js';

const LazyLayout = lazy(() => import('../components/LazyLayout.js'));

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'lazylayout',
        element: <LazyLayout />,
        children: [
          {
            path: 'lazy1',
            element: <LazyPage1 />,
          },
          {
            path: 'lazy2',
            element: <LazyPage2 />,
          },
          {
            path: 'lazy3',
            element: <LazyPage3 />,
          },
        ],
      },
      {
        path: 'no-lazylayout',
        element: <NoLazyLayout />,
        children: [
          {
            path: 'lazy1',
            element: <LazyPage1 />,
          },
          {
            path: 'lazy2',
            element: <LazyPage2 />,
          },
          {
            path: 'lazy3',
            element: <LazyPage3 />,
          },
        ],
      },
    ],
  },
]);
