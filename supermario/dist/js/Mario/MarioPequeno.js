"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioPequeno = void 0;
const MarioCapa_js_1 = require("./MarioCapa.js");
const MarioFogo_js_1 = require("./MarioFogo.js");
const MarioGrande_js_1 = require("./MarioGrande.js");
class MarioPequeno {
    pegarCogumelo() {
        console.log("Mario grande");
        return new MarioGrande_js_1.MarioGrande();
    }
    pegarFlor() {
        console.log("Mario grande e Mario fogo");
        return new MarioFogo_js_1.MarioFogo();
    }
    pegarPena() {
        console.log("Mario grande e Mario com capa");
        return new MarioCapa_js_1.MarioCapa();
    }
    levarDano() {
        console.log("Mario morre");
        return this;
    }
}
exports.MarioPequeno = MarioPequeno;
