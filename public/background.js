/* global chrome */

chrome.runtime.onInstalled.addListener(() => {    
    console.log('Sidepanel extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTabTitle') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                sendResponse({ title: tabs[0].title });
            } else {
                // handle if no page title
                sendResponse({ title: 'No title found' });
            }
        });
      
      return true;
    }
});