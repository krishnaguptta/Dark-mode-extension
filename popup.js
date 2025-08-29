document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleDarkMode");

  chrome.storage.sync.get("darkModeEnabled", (data) => {
    toggle.checked = data.darkModeEnabled || false;
  });

  toggle.addEventListener("change", () => {
    const enabled = toggle.checked;
    chrome.storage.sync.set({ darkModeEnabled: enabled });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setDarkMode,
        args: [enabled]
      });
    });
  });
});

function setDarkMode(enabled) {
  if (enabled) {
    document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
    document.body.style.backgroundColor = "black";
  } else {
    document.documentElement.style.filter = "";
    document.body.style.backgroundColor = "";
  }
}
