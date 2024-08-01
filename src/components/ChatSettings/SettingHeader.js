import React from 'react'
import appLogo from 'assets/app-name.png'

const SettingHeader = ({onClick}) => {
    
    return (
        <div className='setting-header-container'>
            <div className='setting-header'>
                <img src={appLogo} alt="AppLogo" className="header-logo"/>
                <button className='save-settings-button' onClick={onClick}>Save</button>       
            </div>                       
        </div>
    )
}

export default SettingHeader;
