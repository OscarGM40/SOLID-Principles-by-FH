"use strict";
exports.__esModule = true;
var SlackPublisher = /** @class */ (function () {
    function SlackPublisher(connector) {
        this.connector = connector;
    }
    SlackPublisher.prototype.publish = function (content) {
        // Your logic to publish on Slack
        console.log("Slack");
        console.log(content);
    };
    return SlackPublisher;
}());
exports["default"] = SlackPublisher;
