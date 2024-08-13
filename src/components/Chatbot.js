import './Chatbot.css';
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Function to load external scripts dynamically
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load Botpress WebChat scripts
    loadScript('https://cdn.botpress.cloud/webchat/v2/inject.js');
    loadScript('https://mediafiles.botpress.cloud/63420cb5-2a9c-494e-a92f-b646a36dea86/webchat/v2/config.js');


  
    
    
  }, []);

  return <div id="bp-web-widget-container" />;
};

export default Chatbot;
