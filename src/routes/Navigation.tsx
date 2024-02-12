import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { routes } from './routes';
import { Suspense } from 'react';

function Root() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      {routes.map(({ to, path, Component }) => (
        <Route key={to} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
const router = createBrowserRouter([
  {
    path: '*',
    element: <Root />,
  },
]);

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, path, name }) => (
                <li key={to}>
                  <a href={path}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <RouterProvider router={router} />
        </div>
      </Suspense>
    </>
  );
};
