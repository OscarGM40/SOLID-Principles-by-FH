"use strict";
// typescript supports access modifiers for my class properties and methods
// by default they are public
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CatAccess_age;
class CatAccess {
    // private age would be the same(the # character only works in properties, in methods I have to use private keyword)
    // protected variables are only reachable in the class and its derived classes
    constructor(name, age) {
        // if I want a property private I can use #prop or private prop
        _CatAccess_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _CatAccess_age, age, "f");
    }
}
_CatAccess_age = new WeakMap();
