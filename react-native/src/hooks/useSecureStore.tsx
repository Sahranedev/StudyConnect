import * as SecureStore from 'expo-secure-store';
import { useState, useEffect } from 'react';

async function saveItem(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getItem(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}

// Ajustez le type générique T pour qu'il puisse être soit une chaîne, soit un objet
export function useSecureStore<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    getItem(key).then((value) => {
      if (value) {
        // Tente de parser la valeur; si ce n'est pas possible, retourne la valeur directement
        try {
          setStoredValue(JSON.parse(value) as T);
        } catch {
          setStoredValue(value as unknown as T);
        }
      }
    });
  }, [key]);

  const setValue = async (value: T | ((val: T) => T)): Promise<void> => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      const valueToSave =
        typeof valueToStore === 'string'
          ? valueToStore
          : JSON.stringify(valueToStore);
      await saveItem(key, valueToSave);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
