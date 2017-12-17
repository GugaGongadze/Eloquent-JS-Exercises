function elt(name, attributes) {
    var node = document.createElement(name);
    if (attributes) {
        for (var attribute in attributes)
            if (attributes.hasOwnProperty(attribute))
                node.setAttribute(attribute, attributes[attribute]);
    }

    for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == 'string')
            child = document.createTextNode(child);
        node.appendChild(child);
    }
    return node;
}

var controls = Object.create(null);

function createpaint(parent) {
    var canvas = elt('canvas', {
        width: 500,
        height: 300
    });
    var cx = canvas.getContext('2d');
    var toolbar = elt('div', {
        class: 'toolbar'
    });
    for (var name in controls)
        toolbar.appendChild(controls[name](cx));

    var panel = elt('div', {
        class: 'picturepanel'
    }, canvas);
    parent.appendChild(elt('div', null, panel, toolbar));
}