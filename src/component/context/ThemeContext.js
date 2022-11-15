import React , { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext();

const ThemeContextProvider = (props) => {
    const [goDark, setGoDark] = useState(false);

    const handleClick = () => {
        setGoDark(!goDark);
    }
    return (
        <DarkModeContext.Provider value={{ goDark, handleClick }}>
            { props.children }
        </DarkModeContext.Provider>
    )
}

export default ThemeContextProvider