import { Outlet } from 'react-router';
import { Header } from '../Header';
import styles from './styles.module.css';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export { Layout };
