import { useId, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';

const hardcodedPasword = '123';

function Login() {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const id = useId();

  const login = () => {
    if (password !== hardcodedPasword) {
      setError(true);
    } else {
      setError(false);
      localStorage.setItem('loggedin', 'true');
      navigate('/movies');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h2>Вход</h2>
        <label htmlFor={id}>Пароль</label>
        <input
          id={id}
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(() => e.target.value)}
        />
        {error && <span className={styles.error}>Неправильный пароль</span>}
        <button onClick={login} className={styles.button}>
          Войти
        </button>
      </div>
    </div>
  );
}

export { Login };
