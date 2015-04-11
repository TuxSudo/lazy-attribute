"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = listen;

var map = _interopRequire(require("./map"));

function listen() {

    window.addEventListener("attribute.load.cmd", function (e) {
        var loader = map(e.detail);
        loader.call(e.target);
    });
}