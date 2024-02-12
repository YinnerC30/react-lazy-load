import { Link, Outlet } from 'react-router-dom';

export const NoLazyLayout = () => {
  return (
    <>
      <h1>No Lazy Layout</h1>

      <ul>
        <li>
          <Link to="lazy1">Lazy1</Link>
        </li>
        <li>
          <Link to="lazy2">Lazy2</Link>
        </li>
        <li>
          <Link to="lazy3">Lazy3</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default NoLazyLayout;
