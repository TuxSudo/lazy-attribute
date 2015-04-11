"use strict";

module.exports = function (attributeMap) {

    return function () {
        var _this = this;

        Object.keys(attributeMap).forEach(function (k) {
            return _this.setAttribute(attributeMap[k], _this.getAttribute(k));
        });
        this.dispatchEvent(new CustomEvent("attribute.load", { bubbles: true }));
    };
};