"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioFogo = void 0;
const MarioPequeno_js_1 = require("./MarioPequeno.js");
class MarioFogo {
    pegarCogumelo() {
        console.log("80 pontos");
        return this;
    }
    pegarFlor() {
        console.log("100 pontos");
        return this;
    }
    pegarPena() {
        console.log("Mario fogo");
        return this;
    }
    levarDano() {
        console.log("Mario pequeno");
        return new MarioPequeno_js_1.MarioPequeno();
    }
}
exports.MarioFogo = MarioFogo;
