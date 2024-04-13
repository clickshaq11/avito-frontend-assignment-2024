import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getLoggedInData } from '@/utils/getLoggedInData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import LogoutIcon from '@mui/icons-material/Logout';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import styles from './styles.module.css';

function needsBackButton(route: string) {
  return /^movies\/([0-9])+$/.test(route);
}

function Header() {
  const { logout } = getLoggedInData();

  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <span className={styles.title}>MemePoisk для Avito</span>
      <nav className={styles.nav}>
        {needsBackButton(location.pathname) && (
          <button
            onClick={() => navigate(-1)}
            className={styles.button}
            title="Назад"
          >
            <ArrowBackIcon fontSize="large" />
          </button>
        )}
        <Link
          onClick={logout}
          className={styles.button}
          to="/movies"
          title="На главную"
        >
          <FindInPageIcon fontSize="large" />
        </Link>
        <Link
          to="/random"
          title="Выбрать случайный фильм"
          className={styles.button}
        >
          <ShuffleIcon fontSize="large" />
        </Link>
        <button onClick={onLogout} className={styles.button}>
          <LogoutIcon fontSize="large" />
        </button>
      </nav>
    </header>
  );
}

export { Header };
