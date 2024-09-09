// src/components/Chatbot.js

/*import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        // Injecting the chatbot configuration
        window.embeddedChatbotConfig = {
            chatbotId: "HpbTG5Y1j-Wf7QMEf22pe",
            domain: "www.chatbase.co"
        };

        // Create script element for the chatbot
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;

        // Append script to document body
        document.body.appendChild(script);

        // Cleanup function to remove script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h2>Chatbot</h2>
            <p>Chatbot is loading...</p>
        </div>
    );
};

export default Chatbot; */

// src/components/Chatbot.js

import React, { useEffect } from 'react';
import './Chatbot.css'; // Import the CSS file for styling

const Chatbot = () => {
    useEffect(() => {
        // Injecting the chatbot configuration
        window.embeddedChatbotConfig = {
            chatbotId: "HpbTG5Y1j-Wf7QMEf22pe",
            domain: "www.chatbase.co"
        };

        // Create script element for the chatbot
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;

        // Append script to document body
        document.body.appendChild(script);

        // Cleanup function to remove script on unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
      <div className="flex flex-col items-center justify-center p-4 -mt-5">
          <h2 className="text-xl font-bold mb-2">Chatbot</h2>
          <p className="text-gray-600">Chatbot is loading...</p>
      </div>
  );
  
};

export default Chatbot;
