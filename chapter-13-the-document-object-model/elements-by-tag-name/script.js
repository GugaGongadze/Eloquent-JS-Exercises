var children = [];

function byTagName(node, tagName) {
    for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType == document.ELEMENT_NODE) {
            if (node.childNodes[i].tagName.toLowerCase() == tagName) {
                children.push(node.childNodes[i]);
            }
            byTagName(node.childNodes[i], tagName);
        }
    }
    return children;
}