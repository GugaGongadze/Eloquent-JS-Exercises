function urlToPath(url) {
    var path = require('url').parse(url).pathname;
    var decoded = '.' + decodeURIComponent(path);

    while (true) {
        var newPath = decoded.replace(/(\/|\\)\.\.(\/|\\|$)/, '/');
        if (newPath == decoded)
            return decoded;
        decoded = newPath;
    }
}