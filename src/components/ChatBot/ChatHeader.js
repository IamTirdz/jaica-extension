/* global chrome */

import React, { useContext, useState } from 'react'
import appLogo from 'assets/app-name.png'
import { ChatContext } from 'contexts/ChatContext';

const ChatHeader = ({ showTrainButton, showNewChatButton }) => {
    const [tabTitle, setTabTitle] = useState('');
    const { messages } = useContext(ChatContext);
    
    const handleTrainAI = () => {
        chrome.runtime.sendMessage({ action: 'getTabTitle' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('Message error: ', chrome.runtime.lastError);
                setTabTitle('Error retrieving page title');
            } else {
                setTabTitle(response.title || 'No page title found');
            }
        });
    };

    const handleNewChat = () => {
        console.log('(Code Generation) New chat..');
        // todo
    };

    return (
        <div className='chat-header-container'>
            <div className='chat-header-content'>
                <div className='chat-header'>
                    <img src={appLogo} alt="Logo" className="header-logo"/>
                    { showTrainButton &&
                        <button className='train-model-button' onClick={handleTrainAI}>
                            <span className="icon"></span>
                        </button>
                    }
                    { showNewChatButton &&
                        <button className='new-chat-button' onClick={handleNewChat}>
                            <span className="icon"></span>
                        </button>
                    }
                </div>
                
                { messages.length !== 0 && showTrainButton && !showNewChatButton ? (
                    <div className='message-display'>
                        <p className='label'>Currently chatting on page:</p>
                        <p className='path'>{tabTitle}</p>
                    </div> 
                ) : (                    
                    <div className='message-display-inactive'></div>
                )}
            </div>                                     
        </div>
    )
}

export default ChatHeader;
