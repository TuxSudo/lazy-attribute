/*

attributeMap should look like:

{
    'data-lazy-src': 'src'
}

where `data-lazy-src` converts to `src` on command.



listeners sould look like:
{
    'load': function(e){}
}

*/

"use strict";

module.exports = lazyAttribute;

function lazyAttribute(element, attributeMap) {

    var loader = function loader() {

        Object.keys(attributeMap).forEach(function (k) {
            element.setAttribute(attributeMap[k], element.getAttribute(k));
            element.dispatchEvent(new CustomEvent("attribute.load", { bubbles: true, detail: attributeMap[k] }));
        });
    };

    element.addEventListener("attribute.load.cmd", loader);

    return loader;
}