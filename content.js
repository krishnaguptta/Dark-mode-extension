(function() {
  let darkModeStyle = document.getElementById("my-dark-mode-style");

  if (darkModeStyle) {
    darkModeStyle.remove(); // disable dark mode
  } else {
    darkModeStyle = document.createElement("style");
    darkModeStyle.id = "my-dark-mode-style";
    darkModeStyle.innerHTML = `
      html, body {
        background: #121212 !important;
        color: #e0e0e0 !important;
      }
      img, video { filter: brightness(0.8) contrast(1.2); }
    `;
    document.head.appendChild(darkModeStyle);
  }
})();
