import { Outlet } from 'react-router';
import { main } from './layout.module.css';

function Layout() {
  return (
    <main className={main}>
      <Outlet />
    </main>
  );
}

export { Layout };
