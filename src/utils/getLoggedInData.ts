const KEY = 'loggedin';

const getLoggedInData = () => {
  const getLoggedIn = () => {
    return localStorage.getItem(KEY) === 'true';
  };

  const login = () => localStorage.setItem(KEY, 'true');
  const logout = () => localStorage.setItem(KEY, 'true');

  return { getLoggedIn, login, logout };
};

export { getLoggedInData };
