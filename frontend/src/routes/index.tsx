import { Routes, Route } from 'react-router-dom';
import { Profile } from '../pages/Profile';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { GuestRoute } from './GuestRoute';
import { PrivateRoute } from './PrivateRoute';
import { ProfileEdit } from '../pages/Profile/Edit';

const guestRoutes = [
  {
    path: '/',
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

const privateRoutes = [
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/profile/edit',
    element: <ProfileEdit />,
  },
];

export function AppRoutes() {
  return (
    <Routes>
      {guestRoutes.map((route) => (
        <Route
          key={Math.random()}
          path={route.path}
          element={(
            <GuestRoute>
              {route.element}
            </GuestRoute>
          )}
        />
      ))}

      {privateRoutes.map((route) => (
        <Route
          key={Math.random()}
          path={route.path}
          element={(
            <PrivateRoute>
              {route.element}
            </PrivateRoute>
          )}
        />
      ))}
    </Routes>
  );
}
