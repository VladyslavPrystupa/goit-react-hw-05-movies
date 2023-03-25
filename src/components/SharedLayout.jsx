import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';

export const SharedLayout = () => {
  return (
    <>
      <nav className={'navigation'}>
        <NavLink className={'navlink'} to="/">
          Home
        </NavLink>
        <br />
        <NavLink className={'navlink'} to="/movies">
          Movies
        </NavLink>
        <br />
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
