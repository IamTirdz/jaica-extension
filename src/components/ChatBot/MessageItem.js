import React from 'react'

const MessageItem = ({ message }) => {
    return (
        <div className={`message-item ${message.type}`}>
            {message.text}
        </div>
    )
}

export default MessageItem;
