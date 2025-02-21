"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mario = void 0;
const MarioPequeno_1 = require("./MarioPequeno");
class Mario {
    constructor() {
        this.estado = new MarioPequeno_1.MarioPequeno();
    }
    mudarStatus(estado) {
        this.estado = estado;
    }
    pegarCogumelo() {
        return this.estado.pegarCogumelo();
    }
    pegarFlor() {
        return this.estado.pegarFlor();
    }
    pegarPena() {
        return this.estado.pegarPena();
    }
    levarDano() {
        return this.estado.levarDano();
    }
}
exports.Mario = Mario;
