import React, { createContext, useContext, useState } from "react";
import { useTheme } from "./ThemeProvide";

const ThemeContext = createContext();

export default function MyPage() {
    const {theme} = useTheme()

    return (
        <div style={theme === 'light' ? {backgroundColor: "#e9e9e9"} : {backgroundColor: "black"}}>
            <div style={{minHeight: 600}}>
                MyPage
            </div>
        </div>
    )
}

