import React, { useEffect, useState } from 'react'
import appLogo from 'assets/app-name.png'

const ChatHeader = ({ showTrainButton }) => {
    const [buttonVisible, setButtonVisible] = useState(showTrainButton);
    const [tabTitle, setTabTitle] = useState('');

    useEffect(() => {
        // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        //     if (request.title) {
        //         setTabTitle(request.title);
        //     }
        // });
    }, []);
    
    const toggleHeader = () => {
        setButtonVisible(!buttonVisible);
    };

    const handleSubmit = () => {
        console.log('Bot train clicked!');
        // todo
    };

    const handleClear = () => {
        console.log('Bit train clicked!');
        // todo
    };

    return (
        <div className='chat-header-container'>
            <div className='chat-header'>
                <img src={appLogo} alt="AppLogo" className="header-logo"/>
                { buttonVisible &&
                    <button className='train-model-button' onClick={handleSubmit}>Train</button>
                }
                { !buttonVisible &&
                    <button className='new-chat-button' onClick={handleClear}>New Chat</button>
                }
            </div>
            { buttonVisible && 
                <div className='message-display'>
                    <p className='label'>Currently chatting on page:</p>
                    <p className='path'>{tabTitle}</p>
                </div>  
            }                            
        </div>
    )
}

export default ChatHeader;
