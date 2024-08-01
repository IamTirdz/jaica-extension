import React, { useState } from 'react'
import SettingHeader from '../ChatSettings/SettingHeader';
import FormGroup from './FormGroup';
import './chat-settings.css'

const ChatSettings = () => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [notifications, setNotifications] = useState(true);

    const handleSettings = () => {
        console.log('Settings saved:', { theme, language, notifications });
    };

    const handleDeleteChats = () => {
        console.log('Deleted all chats');
    };

    return (
        <div className='settings-container'>
            <SettingHeader onClick={() => handleSettings} />
            <div className='chat-settings'>
                <h3>Settings</h3>
                <div className='chat-settings-group'>
                    <h4>General</h4>
                    <FormGroup id="theme" label="Theme" position="top">
                        <select id='theme' value={theme}
                        onChange={(e) => setTheme(e.target.value)}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </FormGroup>
                    <FormGroup id="language" label="Language" position="center">
                        <select id='language' value={language}
                        onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select>
                    </FormGroup>
                    <FormGroup id="notifications" label="Notifications" position="bottom">
                        <label className='toggle-switch'>
                            <input id="notifications"
                                type='checkbox'
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                            />
                            <span className="slider"></span>
                        </label>                        
                    </FormGroup>
                </div>
                <div className='chat-settings-group'>
                    <h4>Chat History</h4>
                    <FormGroup id="delete-chats" label="Delete all chats" position="none">
                        <button className='delete-chats-button' onClick={handleDeleteChats}>Delete all</button> 
                    </FormGroup>
                </div>                
            </div>
        </div>
    )
}

export default ChatSettings;
