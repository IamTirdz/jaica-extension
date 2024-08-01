import React from "react";
import ChatBot from "components/ChatBot";

const Coding = () => {
    return (
        <div className="home">
            <ChatBot trainModel={false} />
        </div>
    );
};

export default Coding;