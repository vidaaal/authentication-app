import {
  createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

interface AuthProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name?: string;
  email: string;
  bio?: string;
  avatar?: string;
  isSocialAuth?: boolean;
}

interface AuthResponse {
  token: string;
  user: IUser;
}

interface IAuthCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  signUp: (data: IAuthCredentials) => Promise<void>;
  signIn: (data: IAuthCredentials) => Promise<void>;
  user: IUser;
  isAuthenticated: boolean;
  isLoading: boolean;
  signInWithGithubUrl: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const signInWithGithubUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_CLIENT_ID}`;

  useEffect(() => {
    const token = localStorage.getItem('authentication-app.token');

    if (token) {
      setIsAuthenticated(true);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    setIsLoading(false);
  }, []);

  const signUp = useCallback(async ({ email, password }: IAuthCredentials) => {
    try {
      await api.post('/users/create', {
        email,
        password,
      });

      const { data: { token, user: userData } } = await api.post<AuthResponse>('/auth', {
        email,
        password,
      });

      localStorage.setItem('authentication-app.token', JSON.stringify(token));
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(userData);
      setIsAuthenticated(true);

      navigate('/dashboard');
    } catch (err: any) {
      console.log(err.response.data);
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: IAuthCredentials) => {
    try {
      const { data: { token, user: userData } } = await api.post<AuthResponse>('/auth', {
        email,
        password,
      });

      localStorage.setItem('authentication-app.token', JSON.stringify(token));
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(userData);
      setIsAuthenticated(true);

      navigate('/dashboard');
    } catch (err: any) {
      console.log(err.response.data);
    }
  }, []);

  const signInWithGithub = useCallback(async (githubCode: string) => {
    try {
      const { data: { token, user: userData } } = await api.post<AuthResponse>('/auth/github', {
        code: githubCode,
      });

      localStorage.setItem('authentication-app.token', JSON.stringify(token));
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(userData);
      setIsAuthenticated(true);

      navigate('/dashboard');
    } catch (err: any) {
      console.log(err.response.data);
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('auth/github/callback?code=');

    if (hasGithubCode) {
      const [, githubCode] = url.split('?code=');

      signInWithGithub(githubCode);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      signUp,
      signIn,
      user,
      isAuthenticated,
      isLoading,
      signInWithGithubUrl,
    } as IAuthContext),
    [user, isAuthenticated, isLoading, signInWithGithubUrl],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
