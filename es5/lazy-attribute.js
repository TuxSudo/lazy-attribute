"use strict";

(function () {
    "use strict";

    var $$$es6$lazy$attribute$$default = function $$$es6$lazy$attribute$$default(element, attributeMap) {

        var loader = (function (_loader) {
            var _loaderWrapper = function loader() {
                return _loader.apply(this, arguments);
            };

            _loaderWrapper.toString = function () {
                return _loader.toString();
            };

            return _loaderWrapper;
        })(function () {

            Object.keys(attributeMap).forEach(function (k) {
                element.setAttribute(attributeMap[k], element.getAttribute(k));
            });

            element.dispatchEvent(new CustomEvent("attribute.load", { bubbles: true }));
            element.removeEventListener("attribute.load.cmd", loader);
        });

        element.addEventListener("attribute.load.cmd", loader);

        return loader;
    };

    window.lazyAttribute = $$$es6$lazy$attribute$$default;
}).call(undefined);