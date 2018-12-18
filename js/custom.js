
if (window.location.hostname.indexOf("www") < 0) {
    var location = "www." + window.location.host;
    window.location.href = location;
}