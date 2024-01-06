"use strict";
// the client can now ask for any construction available
Object.defineProperty(exports, "__esModule", { value: true });
const castle_director_1 = require("./castle-director");
const house_boat_director_1 = require("./house-boat.director");
const igloo_director_1 = require("./igloo-director");
const IGLOO_ONE = igloo_director_1.default.construct();
console.log(IGLOO_ONE.construction());
const CASTLE_ONE = castle_director_1.default.construct();
console.log(CASTLE_ONE.construction());
const HOUSEBOAT_ONE = house_boat_director_1.default.construct();
console.log(HOUSEBOAT_ONE.construction());
//this pattern is super simple and can come in handy in many situations yet it looks more oriented to backend
