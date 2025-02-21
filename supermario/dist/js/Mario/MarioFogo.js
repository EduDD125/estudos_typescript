import { MarioPequeno } from "./MarioPequeno.js";
export class MarioFogo {
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
        return new MarioPequeno();
    }
}
