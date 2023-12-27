import { createContext, useState } from 'react'

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('theme')) || true)

    return (
        <ThemeContext.Provider 
            value={{ isDark, setIsDark }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider