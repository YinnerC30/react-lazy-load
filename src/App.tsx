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
              <NavLink to="register">Register</NavLink>
            </li>
            <li>
              <NavLink to="formik">Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="formik-yup">Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="formik-components">Formik Components</NavLink>
            </li>
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
