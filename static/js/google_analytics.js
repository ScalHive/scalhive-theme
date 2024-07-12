(function() {
    var doNotTrack = false;
    var localStorageDNT = localStorage.getItem("doNotTrack");

    if (localStorageDNT === "1") {
        doNotTrack = true;
    } else if (localStorageDNT === "0") {
        doNotTrack = false;
    }

    if (respectDoNotTrack) {
        var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
        doNotTrack = (dnt == "1" || dnt == "yes");
    }

    if (!doNotTrack) {
        var gaScript = document.createElement('script');
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + googleAnalyticsID;
        gaScript.async = true;
        document.head.appendChild(gaScript);

        gaScript.onload = function () {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', googleAnalyticsID);
        };
    }
})();
