import { IMarioState } from "./IMarioState.js";
import { MarioCapa } from "./MarioCapa.js";
import { MarioFogo } from "./MarioFogo.js";
import { MarioGrande } from "./MarioGrande.js";

export class MarioPequeno implements IMarioState {
    pegarCogumelo():IMarioState {
        console.log("Mario grande");
        return new MarioGrande();
    }
    pegarFlor():IMarioState {
        console.log("Mario grande e Mario fogo");
        return new MarioFogo();
    }
    pegarPena():IMarioState {
        console.log("Mario grande e Mario com capa");
        return new MarioCapa();
    }
    levarDano():IMarioState {
        console.log("Mario morre");
        return this;
    }
}