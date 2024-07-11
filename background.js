chrome.runtime.onInstalled.addListener(() => {
    fetchAndStoreSites();
  });
  
  function fetchAndStoreSites() {
    fetch('https://your-server.com/sites.csv')
      .then(response => response.text())
      .then(csvContent => {
        const sites = csvContent.split('\n').map(line => line.trim()).filter(line => line);
        chrome.storage.local.set({ sites: sites }, () => {
          console.log('CSV loaded successfully!');
        });
      })
      .catch(error => console.error('Error fetching CSV:', error));
  }