import { NavLink, Outlet } from 'react-router-dom';
import logo from './assets/react.svg';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              <li>
                <NavLink to="lazylayout">LazyLayout</NavLink>
              </li>
              <li>
                <NavLink to="no-lazylayout">No-LazyLayout</NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
}

export default App;
