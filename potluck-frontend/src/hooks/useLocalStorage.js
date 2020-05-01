import {useState} from 'react'
//we only need to import what we're using. then where we want to use our custom hook, we import it
export const useLocalStorage= (key, initialValue) => {
    const[storedValue, setStoredValue]= useState(window.localStorage.getItem(() => {
        //this is how you grab something in local storage. we put key in to try to grab that item
        const item = window.localStorage.getItem(key)
        //here we're looking to see if the key that we passed in to our hook already exists
        return item ? JSON.parse(item) : initialValue;
    }))
    
    const setValue = value => {
        setStoredValue(value); // updates React State
        window.localStorage.setItem(key, JSON.stringify(value));//updates local storage
        //remember that we have to stringify value so that it can be stored. 
        //local storage can onle have string values
    }
    return[storedValue, setValue]
}