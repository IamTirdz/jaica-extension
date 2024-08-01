import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import TextInput from './TextInput'
import ChatContextProvider from 'contexts/ChatContext'
import './chat.css'

const ChatBot = ({ trainModel}) => {
    return (
        <ChatContextProvider>
            <div className='chat-container'>
                <ChatHeader showTrainButton={trainModel} />
                <ChatMessages defaultMessage={!trainModel} />
                <TextInput />
            </div>
        </ChatContextProvider>
    )
}

export default ChatBot;
