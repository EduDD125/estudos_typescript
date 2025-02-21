import { MarioCapa } from "./MarioCapa.js";
import { MarioFogo } from "./MarioFogo.js";
import { MarioGrande } from "./MarioGrande.js";
export class MarioPequeno {
    pegarCogumelo() {
        console.log("Mario grande");
        return new MarioGrande();
    }
    pegarFlor() {
        console.log("Mario grande e Mario fogo");
        return new MarioFogo();
    }
    pegarPena() {
        console.log("Mario grande e Mario com capa");
        return new MarioCapa();
    }
    levarDano() {
        console.log("Mario morre");
        return this;
    }
}
