import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );
  const setValue = (value) => {
    //check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    //set to state
    setLocalStorageValue(value);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  // for json as string JSON.parse
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}
export default useLocalStorage;
