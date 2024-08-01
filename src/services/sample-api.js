const API_URL = 'https://api.example.com/chat';

export const sendMessage = async (message) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    return data;
};