"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioGrande = void 0;
const MarioCapa_js_1 = require("./MarioCapa.js");
const MarioFogo_js_1 = require("./MarioFogo.js");
const MarioPequeno_js_1 = require("./MarioPequeno.js");
class MarioGrande {
    pegarCogumelo() {
        console.log("Mario ganhou 1000 pontos");
        return this;
    }
    pegarFlor() {
        console.log("Mario com fogo. Ganhou 100 pontos");
        return new MarioFogo_js_1.MarioFogo();
    }
    pegarPena() {
        console.log("Mario com capa");
        return new MarioCapa_js_1.MarioCapa();
    }
    levarDano() {
        console.log("Mario pequeno");
        return new MarioPequeno_js_1.MarioPequeno();
    }
}
exports.MarioGrande = MarioGrande;
