const CLEAR_HISTORY_ALARM = 'CLEAR_HISTORY_ALARM';
const HISTORY_EXPIRE_MS = 15 * 60 * 1000;

chrome.alarms.create(CLEAR_HISTORY_ALARM, {periodInMinutes: 1});
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name == CLEAR_HISTORY_ALARM) {
    chrome.history.deleteRange({
      startTime: 0,
      endTime: Date.now() - HISTORY_EXPIRE_MS,
    }, function () {});
  }
});
