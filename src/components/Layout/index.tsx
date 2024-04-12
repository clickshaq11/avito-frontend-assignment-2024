import { Outlet } from 'react-router';
import styles from './styles.module.css';

function Layout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}

export { Layout };
