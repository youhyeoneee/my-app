import React, { createContext, useContext, useState } from "react";

// 얘만있으면 컴포넌트 트리 내 어디에 있더라도 ThemeContext.Provider value값을 참조할 수 있음
const ThemeContext = createContext();


export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// 사용자 정의 훅
export function useTheme() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return {theme, toggleTheme};
}