import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface CustomRouteProps {
  children: ReactNode;
}

export function GuestRoute({ children }: CustomRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const { pathname } = useLocation();

  console.log(pathname);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      {children}
    </>
  );
}
