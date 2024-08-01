import React, { useContext } from "react";
import { ChatContext } from "contexts/ChatContext";
import MessageItem from "./MessageItem";
import appLogo from 'assets/app-logo.png';

const ChatMessages = ({ defaultMessage }) => {
    const { messages } = useContext(ChatContext);

    return (
        <div className="chat-messages">
            { messages.length === 0 ? (
                <div>
                    { defaultMessage ? (
                        <div className='empty-state'>
                            <img src={appLogo} alt='No messages' />
                            <h3>Hello, how can i help you?</h3>
                            <p>Enhance your productivity in working, ensuring<br/>
                                efficient and highly-quality results
                            </p>
                            <div className="description">
                                {/* <h3>Features</h3> */}
                                <p>💡  Knowledge base</p>
                                <p>✨  Personalized recommendations</p>
                                <p>🌏  Seamless integrations</p>
                            </div>
                        </div>
                    ) : (
                        <div className='empty-state'>
                            <img src={appLogo} alt='No messages' />
                            <h3>Discover and explore</h3>
                            <p>Get the content of any web page in a<br/>
                                simple and efficient way
                            </p>
                            <div className="description">
                                <h3>How to use</h3>
                                <p>🌐  Go to any web page that you want to get content</p>
                                <p>👆  Click on train button and wait</p>
                                <p>🎉  Yay! you get the page content</p>
                            </div>
                        </div>
                    )}  
                </div>            
            ) : (
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <MessageItem key={index} message={msg}/>
                    ))}
                </div>
            )}  
        </div>         
    )
}

export default ChatMessages;
