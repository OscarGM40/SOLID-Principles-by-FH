"use strict";
exports.__esModule = true;
var facebook_connector_1 = require("./facebook-connector");
var facebook_publisher_1 = require("./facebook-publisher");
var FacebookFactory = /** @class */ (function () {
    function FacebookFactory() {
    }
    FacebookFactory.prototype.getConnector = function () {
        return new facebook_connector_1["default"]();
    };
    FacebookFactory.prototype.getPublisher = function (connector) {
        return new facebook_publisher_1["default"](connector);
    };
    return FacebookFactory;
}());
exports["default"] = FacebookFactory;
