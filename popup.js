document.getElementById('save').addEventListener('click', function() {
    var token = document.getElementById('token').value;
    chrome.storage.sync.set({'token': token}, function() {
        console.log('Token saved');
        // Clear the input field after saving
        document.getElementById('token').value = '';
    });
});

document.getElementById('addColumn').addEventListener('click', function() {
    console.log('Add Column button clicked');

    // Send a message to the content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "addColumn"}, function(response) {
            console.log("Message sent to content script.");
        });
    });
});

