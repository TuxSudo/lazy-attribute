"use strict";

(function () {
    "use strict";

    var $$$es6$map$$default = function $$$es6$map$$default(attributeMap) {

        return function () {
            var _this = this;

            Object.keys(attributeMap).forEach(function (k) {
                return _this.setAttribute(attributeMap[k], _this.getAttribute(k));
            });
            this.dispatchEvent(new CustomEvent("attribute.load", { bubbles: true }));
        };
    };

    function $$$es6$listen$$listen() {

        window.addEventListener("attribute.load.cmd", function (e) {
            var loader = $$$es6$map$$default(e.detail);
            loader.call(e.target);
        });
    }
    var $$$es6$listen$$default = $$$es6$listen$$listen;

    window.lazyAttribute = { map: $$$es6$map$$default, listen: $$$es6$listen$$default };
}).call(undefined);