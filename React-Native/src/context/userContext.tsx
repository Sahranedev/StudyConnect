import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
};

const UserContext = createContext<{ user: UserType | null; setUser: React.Dispatch<React.SetStateAction<UserType | null>> }>({ user: null, setUser: () => {} });

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getTokenAndDecode = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      if (token) {
        try {
          
          const decoded = jwtDecode(token) as UserType;
          setUser(decoded);
        } catch (error) {
          console.error("JWT decoding failed:", error);
        }
      }
    };
    
    getTokenAndDecode();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
