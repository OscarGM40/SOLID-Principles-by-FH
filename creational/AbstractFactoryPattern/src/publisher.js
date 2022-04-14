"use strict";
exports.__esModule = true;
var Publisher = /** @class */ (function () {
    function Publisher(content) {
        this.content = content;
    }
    Publisher.prototype.send = function (factory) {
        var connector = factory.getConnector();
        var publisher = factory.getPublisher(connector);
        connector.open();
        publisher.publish(this.content);
        connector.close();
    };
    return Publisher;
}());
exports["default"] = Publisher;
