import React, { createContext, useContext, useMemo, ReactNode, useEffect, useState } from "react";
import { BaseUser, Teacher, Student, UserType } from "../interfaces/User";
import * as SecureStore from 'expo-secure-store';

interface CurrentUserContextType {
  user: UserType | null; // Modification ici
  setUser: (user: UserType | null) => Promise<void>; // Modification ici
  token: string;
  setToken: (token: string) => Promise<void>;
}

const defaultValue: CurrentUserContextType = {
  user: null, 
  setUser: async () => {},
  token: "",
  setToken: async () => {},
};

const CurrentUserContext = createContext<CurrentUserContextType>(defaultValue);

interface CurrentUserContextProviderProps {
  children: ReactNode;
}

export const CurrentUserContextProvider: React.FunctionComponent<CurrentUserContextProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<UserType | null>(defaultValue.user); // Modification ici
  const [token, setTokenState] = useState<string>(defaultValue.token);

  useEffect(() => {
    (async () => {
      const storedUser = await SecureStore.getItemAsync('user');
      if (storedUser) setUserState(JSON.parse(storedUser));
      
      const storedToken = await SecureStore.getItemAsync('token');
      if (storedToken) setTokenState(storedToken);
    })();
  }, []);

  const setUser = async (newUser: UserType | null) => {
    setUserState(newUser);
    const userData = newUser ? JSON.stringify(newUser) : null;
    await SecureStore.setItemAsync('user', userData ?? '');
  };

  const setToken = async (newToken: string) => {
    setTokenState(newToken);
    await SecureStore.setItemAsync('token', newToken);
  };

  const value = useMemo(() => ({
    user,
    setUser,
    token,
    setToken,
  }), [user, token]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserContext = (): CurrentUserContextType => useContext(CurrentUserContext);
