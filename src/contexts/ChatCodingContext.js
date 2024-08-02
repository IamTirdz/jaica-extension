import React, { createContext } from 'react'

export const ChatCodingContext = createContext();

const ChatCodingContextProvider = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    }

    return (
        <ChatCodingContext.Provider value={{ messages, addMessage }}>
            {children}
        </ChatCodingContext.Provider>
    )
}

export default ChatCodingContextProvider
