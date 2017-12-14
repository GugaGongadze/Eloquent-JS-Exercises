var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function request(type) {
    var rec = new XMLHttpRequest();
    rec.open('GET', 'http://eloquentjavascript.net/author', false);
    rec.setRequestHeader('accept', type);
    rec.send(null);
}

var mediaTypes = [
    'text/plain',
    'text/html',
    'application/json',
    'application/rainbows+unicorns'
];

mediaTypes.forEach(function (type) {
    console.log(request(type));
});