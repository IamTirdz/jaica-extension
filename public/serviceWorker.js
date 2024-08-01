chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel
        .setPanelBehavior({ openPanelOnActionClick: true })
        .catch((error) => console.error(error));
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: getCurrentTabTitle,
      });
  });
});

function getCurrentTabTitle() {
  chrome.runtime.sendMessage({ title: document.title });
}
