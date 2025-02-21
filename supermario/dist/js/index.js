"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mario_js_1 = require("./Mario/Mario.js");
const MarioCapa_js_1 = require("./Mario/MarioCapa.js");
const mario = new Mario_js_1.Mario();
console.log(".::Início de partida::.");
console.log("Mario Pequeno!");
mario.pegarCogumelo();
mario.mudarStatus(new MarioCapa_js_1.MarioCapa());
