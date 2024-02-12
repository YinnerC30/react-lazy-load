import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { About, Home, Users } from '../components';

function Root() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
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
