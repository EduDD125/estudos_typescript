import { MarioPequeno } from "./MarioPequeno";
export class Mario {
    constructor() {
        this.estado = new MarioPequeno();
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
