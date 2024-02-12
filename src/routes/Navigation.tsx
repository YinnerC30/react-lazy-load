import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <h1>Home page</h1>,
  },
  {
    path: 'home',
    element: <h1>Home page</h1>,
  },
  {
    path: 'about',
    element: <h1>About page</h1>,
  },
  {
    path: 'users',
    element: <h1>Users page</h1>,
  },
]);

export const Navigation = () => {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>
        <RouterProvider router={router} />
      </div>
    </>
  );
};
