"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creator_1 = require("./creator");
const GiveMeAChair = creator_1.default.ChairFactory("big");
console.log(GiveMeAChair.getDimensions());
const GiveMeAMediumChair = creator_1.default.ChairFactory("medium");
console.log(GiveMeAMediumChair.getDimensions());
// Resumen
// El patron factory difiere la creacion del objeto final a una subclase
// este patrón inserta otra capa de abstracción entre la instanciación y donde se va a usar la instancia
// no se sabe cuantos o que objetos va a usar el cliente
// el cliente no sabe nada sobre los detalles de la implementación, que quedan localizados en cada subclase
