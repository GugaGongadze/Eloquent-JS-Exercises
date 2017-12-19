function request(options, callback) {
    var req = new XMLHttpRequest();
    req.open(options.method || "GET", options.pathname, true);
    req.addEventListener("load", function () {
        if (req.status < 400)
            callback(null, req.responseText);
        else
            callback(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function () {
        callback(new Error("Network error"));
    });
    req.send(options.body || null);
}

var filelist = document.querySelector("#filelist");
var textarea = document.querySelector("#file");

request({
    pathname: './'
}, function (error, files) {
    if (error) throw error;

    files.split('\n').forEach(function (file) {
        var option = document.createElement('option');
        option.textContent = file;
        filelist.appendChild(option);
    });

    loadCurrentFile();
});

function loadCurrentFile() {
    request({
        pathname: filelist.value
    }, function (error, file) {
        if (error) throw error;
        textarea.value = file;
    });
}

filelist.addEventListener('change', loadCurrentFile);

function saveFile() {
    request({
        pathname: filelist.value,
        method: 'PUT',
        body: textarea.value
    }, function (error) {
        if (error) throw error;
    });
}