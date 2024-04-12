import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './styles.module.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem('loggedin');
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <span className={styles.title}>MemePoisk для Avito</span>
      <nav className={styles.nav}>
        {location.pathname !== '/movies' && (
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
        <button onClick={logout} className={styles.button}>
          <LogoutIcon fontSize="large" />
        </button>
      </nav>
    </header>
  );
}

export { Header };
