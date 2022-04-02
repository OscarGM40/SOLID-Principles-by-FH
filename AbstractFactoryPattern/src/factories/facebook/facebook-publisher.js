"use strict";
exports.__esModule = true;
var FacebookPublisher = /** @class */ (function () {
    function FacebookPublisher(connector) {
        this.connector = connector;
    }
    FacebookPublisher.prototype.publish = function (content) {
        // Your logic to publish on Facebook
        console.log("Facebook");
        console.log(content);
    };
    return FacebookPublisher;
}());
exports["default"] = FacebookPublisher;
