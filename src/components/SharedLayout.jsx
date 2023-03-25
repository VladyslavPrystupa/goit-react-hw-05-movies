import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <h1>store</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/movies">Movies</NavLink>
        <br />
      </nav>
      <Outlet />
    </>
  );
};
