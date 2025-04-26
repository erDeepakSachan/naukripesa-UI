window.AppSettings = {
    "ApiBaseUrl": "https://localhost:7031/api",
    "AppName": "Admin Panel",
    "LogoPath": "/img/logo.png"
} ;

function loadScriptSync(src) {
    var script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.defer = false;

    var isLoaded = false;
    script.onload = function () {
        isLoaded = true;
    };
    script.onerror = function () {
        console.error("Failed to load script:", src);
        isLoaded = true;
    };

    document.head.appendChild(script);
}

function loadThemeCss() {
  const themeName = `${(localStorage.getItem('app-theme-css') || 'bootstrap-united')}.css`;

  let link = document.getElementById('theme-css-link');

  if (link) {
    link.href = themeName;
  } else {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = themeName;
    link.type = 'text/css';
    link.id = 'theme-css-link';

    const scriptTag = document.getElementById('app-config-js');

    if (scriptTag) {
      scriptTag.parentNode.insertBefore(link, scriptTag.nextSibling);
    } else {
      console.warn("Script tag with id 'app-config-js' not found.");
      document.head.appendChild(link);
    }
  }
}

loadThemeCss();

loadScriptSync(`${window.AppSettings.ApiBaseUrl}/Home/NotyOptions?forError=false`);
loadScriptSync(`${window.AppSettings.ApiBaseUrl}/Home/NotyOptions?forError=true`);