import React, { useState, useContext } from "react";
import { ChatContext } from "contexts/ChatContext";
import sendIcon from 'assets/send-message.svg'

const TextInput = () => {
    const [input, setInput] = useState('');
    const { addMessage } = useContext(ChatContext);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addMessage({ text: input, type: 'user' });
            setInput('');
        }
    };

    return (
        <div className="chat-input">
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <textarea className="input-field" type="text" value={input} onChange={handleChange} placeholder="Ask anything.." />
                </div>
                <button className="send-button" type="submit">
                    <img src={sendIcon} alt="Send"/>
                </button>
            </form>
        </div>
    )
}

export default TextInput;
