"use strict";

(function () {
    "use strict";

    var $$map$$default = function $$map$$default(attributeMap) {

        return function () {
            var _this = this;

            Object.keys(attributeMap).forEach(function (k) {
                return _this.setAttribute(attributeMap[k], _this.getAttribute(k));
            });
            this.dispatchEvent(new CustomEvent("attribute.load", { bubbles: true, detail: attributeMap }));
        };
    };

    function $$listen$$listen() {

        window.addEventListener("attribute.load.cmd", function (e) {
            var loader = $$map$$default(e.detail);
            loader.call(e.target);
        });
    }
    var $$listen$$default = $$listen$$listen;

    var $$$es6$index$$default = {
        map: $$map$$default,
        listen: $$listen$$default
    };

    window.lazyAttribute = $$$es6$index$$default;
}).call(undefined);