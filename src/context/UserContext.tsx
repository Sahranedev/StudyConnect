import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { User, Teacher, Student } from "../interfaces/User";
import useLocalStorage from "../LocalStorage/useLocalStorage";

interface CurrentUserContextType {
  user: User | Student | Teacher ;
  setUser: React.Dispatch<React.SetStateAction<User | Student | Teacher>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: CurrentUserContextType = {
  user: {} as User, 
  setUser: () => {},
  token: "",
  setToken: () => {},
};

const CurrentUserContext = createContext(defaultValue);

interface CurrentUserContextProviderProps {
  children: ReactNode;
}

export const CurrentUserContextProvider: React.FunctionComponent<CurrentUserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", defaultValue.user);
  const [token, setToken] = useLocalStorage("token", defaultValue.token);

  const value = useMemo(
    () => ({
      user,
      setUser,
      token,
      setToken,
      defaultValue
    }),
    [user, token]
  );

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserContext = (): CurrentUserContextType => useContext(CurrentUserContext);
