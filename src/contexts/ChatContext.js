import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    }

    return (
        <ChatContext.Provider value={{ messages, addMessage }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;