chrome.browserAction.onClicked.addListener(function(tab) {
    var url = window.location.href.toString();
 	  if (tab.url.indexOf("http://www.google.com/")!= -1 || tab.url.indexOf("https://www.google.com/")!= -1) {
 	  chrome.tabs.executeScript(tab.id, {code: "var url = window.location.href.toString();"}, function() {
 	  chrome.tabs.executeScript(tab.id, {file: "searchTunes.js"})
 	  }
    )}
});

