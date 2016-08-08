chrome.runtime.onInstalled.addListener(function() {
  //not sure why this has to be a list but oh well
  var context = "selection";
  var title = "Remember this quote";
  var id = chrome.contextMenus.create({"title":title, "contexts":[context], "id":"context"+context})
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var tab_url = tab && tab.url;

  chrome.storage.sync.set({ "value": tab_url }, function(){
    message("Quote saved!");
  });

};

chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });