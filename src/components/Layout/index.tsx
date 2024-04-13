import { Outlet } from 'react-router';
import { Header } from '../Header';
import styles from './styles.module.css';

function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
