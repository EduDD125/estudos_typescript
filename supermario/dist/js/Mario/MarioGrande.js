import { MarioCapa } from "./MarioCapa.js";
import { MarioFogo } from "./MarioFogo.js";
import { MarioPequeno } from "./MarioPequeno.js";
export class MarioGrande {
    pegarCogumelo() {
        console.log("Mario ganhou 1000 pontos");
        return this;
    }
    pegarFlor() {
        console.log("Mario com fogo. Ganhou 100 pontos");
        return new MarioFogo();
    }
    pegarPena() {
        console.log("Mario com capa");
        return new MarioCapa();
    }
    levarDano() {
        console.log("Mario pequeno");
        return new MarioPequeno();
    }
}
