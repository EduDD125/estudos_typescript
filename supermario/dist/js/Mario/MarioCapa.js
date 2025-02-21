import { MarioFogo } from "./MarioFogo";
import { MarioPequeno } from "./MarioPequeno";
export class MarioCapa {
    pegarCogumelo() {
        console.log("100 pontos");
        return this;
    }
    pegarFlor() {
        console.log("Mario fogo");
        return new MarioFogo();
    }
    pegarPena() {
        console.log("100 pontos");
        return this;
    }
    levarDano() {
        console.log("Mario pequeno");
        return new MarioPequeno();
    }
}
