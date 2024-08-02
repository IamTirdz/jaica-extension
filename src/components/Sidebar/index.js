import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import appLogo from 'assets/app-logo-small.png'
import homeIcon from 'assets/chat-box.svg'
import homeIconFilled from 'assets/chat-box-filled.svg'
import codingIcon from 'assets/chat-code.svg'
import codingIconFilled from 'assets/chat-code-filled.svg'
import settingsIcon from 'assets/settings.svg'
import settingsIconFilled from 'assets/settings-filled.svg'
import MenuItem from "./MenuItem";
import { SidebarContext } from "contexts/SidebarContext";
import './sidebar.css'
import { chromeListener } from "chromeListener";

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(SidebarContext);
    const navigate = useNavigate();

    useEffect(() => {
        chromeListener(setActiveMenu);
        // const path = window.location.pathname;
        // setActiveMenu(path.replace('/', ''))
    }, []);

    const handleMenu = (id) => {       
        navigate(`/${id}`)
        setActiveMenu(id);
    };
    
    return (
        <div className="sidebar-container">
            <img src={appLogo} alt="Logo" className="sidebar-logo"/>
            <div className="sidebar-menu">
                <MenuItem
                    id='home'           
                    icon={activeMenu === 'home' ? homeIconFilled : homeIcon}
                    label='General'
                    isActive={activeMenu === '/' || activeMenu === 'home'}
                    onClick={() => handleMenu('home')}
                />

                <MenuItem
                    id='coding'
                    icon={activeMenu === 'coding' ? codingIconFilled : codingIcon}
                    label='Coding'
                    isActive={activeMenu === 'coding'}
                    onClick={() => handleMenu('coding')}
                />
            </div>

            <div className="sidebar-footer">
                <MenuItem
                    id='settings'
                    icon={activeMenu === 'settings' ? settingsIconFilled : settingsIcon}
                    label=''
                    isActive={activeMenu === 'settings'}
                    onClick={() => handleMenu('settings')}
                />
            </div>
            
        </div>
    );
};

export default Sidebar;