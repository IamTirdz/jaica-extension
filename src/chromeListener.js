/* global chrome */

export const chromeListener = (setDefaultMenu) => {
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener((message) => {
          if (message.type === 'SIDE_PANEL_OPENED') {
            setDefaultMenu('home');
          }
        });
      } else {
        console.warn('Chrome runtime not available');
      }
};