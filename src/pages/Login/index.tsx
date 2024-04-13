import { useId, useState } from 'react';
import { useNavigate } from 'react-router';
import { getLoggedInData } from '@/utils/getLoggedInData';
import styles from './styles.module.css';

const hardcodedPasword = '123';

function Login() {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const { login } = getLoggedInData();
  const navigate = useNavigate();
  const id = useId();

  const onLogin = () => {
    if (password !== hardcodedPasword) {
      setError(true);
    } else {
      setError(false);
      login();
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
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <span className={styles.error}>Неправильный пароль</span>}
        <button onClick={onLogin} className={styles.button}>
          Войти
        </button>
      </div>
    </div>
  );
}

export { Login };
