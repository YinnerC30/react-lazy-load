import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

import logo from '../assets/react.svg';
import { About, Home, Users } from '../components';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

function Root() {
  return (
    // <Routes>
    //   <Route path="/*" element={<Navigate to="/home" replace />} />
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/users" element={<Users />} />
    // </Routes>
    <Routes>
      <Route path="/*" element={<Navigate to="/lazy1" replace />} />
      <Route path="/lazy1" element={<LazyPage1 />} />
      <Route path="/lazy2" element={<LazyPage2 />} />
      <Route path="/lazy3" element={<LazyPage3 />} />
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
              <a href="/lazy1">lazy1</a>
            </li>
            <li>
              <a href="/lazy2">lazy2</a>
            </li>
            <li>
              <a href="/lazy3">lazy3</a>
            </li>
          </ul>
        </nav>

        <RouterProvider router={router} />
      </div>
    </>
  );
};
