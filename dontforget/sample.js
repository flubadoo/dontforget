chrome.runtime.onInstalled.addListener(function() {
  //not sure why this has to be a list but oh well
  var context = "selection";
  var title = "Remember this quote";
  var id = chrome.contextMenus.create({"title":title, "contexts":[context], "id":"context"+context})
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var tab_url = tab && tab.url;
  window.open(tab_url)
};