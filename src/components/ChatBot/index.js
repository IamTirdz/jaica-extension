import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import TextInput from './TextInput'
import ChatContextProvider from 'contexts/ChatContext'
import './chat.css'

const ChatBot = ({ defaultMessage }) => {
    return (
        <ChatContextProvider>
            <div className='chat-container'>
                <ChatHeader 
                    showTrainButton={defaultMessage}
                    showNewChatButton={!defaultMessage} />
                <ChatMessages defaultMessage={!defaultMessage} />
                <TextInput />
            </div>
        </ChatContextProvider>
    )
}

export default ChatBot;
