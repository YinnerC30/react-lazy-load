import { NavLink, Outlet } from 'react-router-dom';
import logo from './assets/react.svg';

function App() {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
