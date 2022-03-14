chrome.tabs.onCreated.addListener(do_something);
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    console.log(tab.url);
    if (info.status == 'complete') do_something(tab);
});

function do_something(tab) {
    var tabUrl = tab.url;
    if (tabUrl && tabUrl.indexOf("YOUR_SITE<https://DOMAIN/* or https://DOMAIN/PATH/*>") != -1) {

        chrome.scripting.insertCSS(
          {
            target: {tabId: tab.id},
            files: ["css/styles.css"]
          }
        );
    }
}