chrome.history.onVisited.addListener(function (historyItem) {
  chrome.history.deleteUrl({url: historyItem.url});
});

window.setInterval(function () {
  chrome.history.deleteAll(function () {});
}, 10 * 60 * 1000);
