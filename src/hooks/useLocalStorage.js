import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {

    // May be the key is already present in the localstorage or we are creating a new key for the first time
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue; // If the key is already present in the local storage then return the value of the key else return the initial value
        } catch {
            console.log("Error reading local storage key: ", key);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            // if the user changes the value of the key or stored value then update the local storage
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch {
            console.log("Error writing to local storage key: ", key);
        }
    }, [key, storedValue]);


    return [storedValue, setStoredValue];
    
}