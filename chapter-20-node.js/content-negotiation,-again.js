var http = require('http');

var mediaTypes = [
    'text/plain',
    'text/html',
    'application/json'
];

function readStreamAsString(stream, callback) {
    var data = '';
    stream.on('data', function (chunk) {
        data += chunk.toString();
    });
    stream.on('end', function () {
        callback(null, data);
    });
    stream.on('error', function (error) {
        callback(error);
    });
}

mediaTypes.forEach(function(type) {
    http.request({
        hostname: 'eloquentjavascript.net',
        path: '/author',
        type: 'GET',
        headers: {Accept: type}
    }, function(response) {
        readStreamAsString(response, function(error, content) {
            if (error) throw error;
            console.log(content);
        });
    }).end();
});