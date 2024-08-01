import ChatBot from "components/ChatBot";
import React from "react";

const Home = () => {
    return (
        <div className="home">
            <ChatBot trainModel={true} />
        </div>
    );
};

export default Home;