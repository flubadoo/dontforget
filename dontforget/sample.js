chrome.runtime.onInstalled.addListener(function() {
  //not sure why this has to be a list but oh well
  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Remember this quote"
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
  }
});
