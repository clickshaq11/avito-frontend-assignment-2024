import { Navigate, Outlet } from 'react-router';

function AuthLayout() {
  if (!localStorage.getItem('loggedin')) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export { AuthLayout };
