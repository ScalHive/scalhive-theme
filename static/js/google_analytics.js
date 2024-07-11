(function() {
    var doNotTrack = localStorage.getItem("doNotTrack");
    //
    // var respectDoNotTrack = {{ .Site.Config.Privacy.GoogleAnalytics.RespectDoNotTrack }};
    // var gaID = "{{ .Site.Config.Services.GoogleAnalytics.ID }}";
    //
    // if (respectDoNotTrack) {
    //     var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
    //     doNotTrack = (dnt == "1" || dnt == "yes");
    // }
    //
    // if (!doNotTrack) {
    //     var gaScript = document.createElement('script');
    //     gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + gaID;
    //     document.head.appendChild(gaScript);
    //
    //     gaScript.onload = function () {
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
    //         gtag('config', gaID);
    //     };
    // } else {
    //     console.warn("Do Not Track is enabled, Google Analytics will not load.");
    // }
    console.log("------------------")
    console.log(doNotTrack)
})();
