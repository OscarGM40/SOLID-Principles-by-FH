"use strict";
exports.__esModule = true;
var slack_publisher_1 = require("./slack-publisher");
var slack_connector_1 = require("./slack-connector");
var SlackFactory = /** @class */ (function () {
    function SlackFactory() {
    }
    SlackFactory.prototype.getConnector = function () {
        return new slack_connector_1["default"]();
    };
    SlackFactory.prototype.getPublisher = function (connector) {
        return new slack_publisher_1["default"](connector);
    };
    return SlackFactory;
}());
exports["default"] = SlackFactory;
