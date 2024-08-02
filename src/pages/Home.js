import ChatBot from "components/ChatBot";
import React, { useEffect, useState } from "react";

const Home = () => {
    

    return (
        <div className="home">
            <ChatBot defaultMessage={true} />
        </div>
    );
};

export default Home;