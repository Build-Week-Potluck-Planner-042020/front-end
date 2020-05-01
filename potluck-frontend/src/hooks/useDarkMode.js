import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode= (key) =>{
    //so we destructure what we're getting back from useLocalStorage
    const[darkMode, setDarkMode] = useLocalStorage(key)
    //any dom manipulation is a side effect
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('dark-mode')
        }else{document.body.classList.remove('dark-mode')}
    }, [darkMode])
    return[darkMode,setDarkMode]
}