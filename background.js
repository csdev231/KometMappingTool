chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "showNotification") {
      chrome.notifications.create('', {
        type: 'basic',
        iconUrl: 'icon.png',
        title: request.title,
        message: request.message
      }, function(notificationId) {
        console.log("Notification displayed:", notificationId);
      });
    }
  });
  