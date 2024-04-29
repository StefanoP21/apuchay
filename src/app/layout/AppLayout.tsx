import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../../shared';

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
