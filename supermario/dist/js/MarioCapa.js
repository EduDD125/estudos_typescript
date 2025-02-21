"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioCapa = void 0;
const MarioFogo_1 = require("./MarioFogo");
const MarioPequeno_1 = require("./MarioPequeno");
class MarioCapa {
    pegarCogumelo() {
        console.log("100 pontos");
        return this;
    }
    pegarFlor() {
        console.log("Mario fogo");
        return new MarioFogo_1.MarioFogo();
    }
    pegarPena() {
        console.log("100 pontos");
        return this;
    }
    levarDano() {
        console.log("Mario pequeno");
        return new MarioPequeno_1.MarioPequeno();
    }
}
exports.MarioCapa = MarioCapa;
