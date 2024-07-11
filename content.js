chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'blur') {
      document.body.style.filter = 'blur(10px)';
    }
  });