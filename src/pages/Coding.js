import React from "react";
import ChatBot from "components/ChatBot";

const Coding = () => {
    return (
        <div className="home">
            <ChatBot defaultMessage={false} />
        </div>
    );
};

export default Coding;