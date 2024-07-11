document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['sites'], (result) => {
      const statusElement = document.getElementById('status');
      if (result.sites && result.sites.length > 0) {
        statusElement.textContent = `Active: ${result.sites.length} sites loaded`;
      } else {
        statusElement.textContent = 'No sites loaded. Please contact support.';
      }
    });
  });