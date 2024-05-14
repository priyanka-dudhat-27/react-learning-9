import React, { createContext, useContext, useState } from "react";

// Creating a context object
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    const handleThemeChange = () => {
        setTheme(!theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
