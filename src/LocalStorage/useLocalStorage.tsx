import { useState, useEffect } from "react";

// Définir un type générique pour la fonction getStorageValue
// Cette fonction récupère une valeur du localStorage et la parse.
function getStorageValue<T>(key: string, defaultValue: T): T {
  // On récupère la valeur dans le localStorage
  const saved = localStorage.getItem(key);
  // On la convertit
  const initial = saved ? JSON.parse(saved) : null;
  // On renvoie soit la valeur convertie, soit la valeur par défaut.
  return initial !== null ? initial : defaultValue;
}

// Utiliser les génériques pour définir les types de key et defaultValue
// et pour retourner un type cohérent pour la valeur et le setValue.

function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {

  // Le hook personnalisé gère une value et son seteur.
    // La valeur par défaut est le résultat d'une fonction (plus haut).
    
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

    useEffect(() => {
      
    // Au lancement, soit on a récupéré une valeur et on l'enregistre,
      // soit on stocke une valeur par défaut.
      
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
