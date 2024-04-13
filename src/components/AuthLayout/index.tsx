import { Navigate, Outlet } from 'react-router';
import { getLoggedInData } from '@/utils/getLoggedInData';
import { Header } from '../Header';
import styles from './styles.module.css';

function AuthLayout() {
  const { getLoggedIn } = getLoggedInData();

  if (!getLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export { AuthLayout };
