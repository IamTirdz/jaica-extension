import React, { createContext, useState, useEffect } from 'react'

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
    const [menu, setMenu] = useState('home');

    useEffect(() => {
        const path = window.location.pathname;
        setMenu(path.replace('/', ''))
    }, []);

    return (
        <SidebarContext.Provider value={{ menu }}>
            { children }
        </SidebarContext.Provider>
    )
}

export default SidebarContext;
