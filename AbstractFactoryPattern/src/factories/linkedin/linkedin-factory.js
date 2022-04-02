"use strict";
exports.__esModule = true;
var linkedin_publisher_1 = require("./linkedin-publisher");
var linkedin_connector_1 = require("./linkedin-connector");
var LinkedinFactory = /** @class */ (function () {
    function LinkedinFactory() {
    }
    LinkedinFactory.prototype.getConnector = function () {
        return new linkedin_connector_1["default"]();
    };
    LinkedinFactory.prototype.getPublisher = function (connector) {
        return new linkedin_publisher_1["default"](connector);
    };
    return LinkedinFactory;
}());
exports["default"] = LinkedinFactory;
