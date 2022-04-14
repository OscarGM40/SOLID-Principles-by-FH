"use strict";
exports.__esModule = true;
var LinkedinPublisher = /** @class */ (function () {
    function LinkedinPublisher(connector) {
        this.connector = connector;
    }
    LinkedinPublisher.prototype.publish = function (content) {
        // Your logic to publish on Linkedin
        console.log("Linkedin");
        console.log(content);
    };
    return LinkedinPublisher;
}());
exports["default"] = LinkedinPublisher;
