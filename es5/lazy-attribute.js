"use strict";

(function () {
    "use strict";
    function es6$lazy$attribute$$lazyAttribute(element, attributeMap) {

        var loader = function loader() {

            Object.keys(attributeMap).forEach(function (k) {
                element.setAttribute(attributeMap[k], element.getAttribute(k));
                element.dispatchEvent(new CustomEvent("attribute.load", { bubbles: true, detail: attributeMap[k] }));
            });
        };

        element.addEventListener("attribute.load.cmd", loader);

        return loader;
    }
    var es6$lazy$attribute$$default = es6$lazy$attribute$$lazyAttribute;
}).call(undefined);