"use client"

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

  

    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")  
        }
        
    },[isDarkMode])


    return <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>;
};


  export const useTheme = ()=>{
        const context = useContext(ThemeContext)
        if(!context){
            throw new Error("useTheme must be used within a ThemeContextProvider")
        }
        return context
    }