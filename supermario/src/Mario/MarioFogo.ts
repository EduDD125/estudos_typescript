import { IMarioState } from "./IMarioState.js";
import { MarioPequeno } from "./MarioPequeno.js";

export class MarioFogo implements IMarioState {
    pegarCogumelo():IMarioState {
        console.log("80 pontos");
        return this;
    }
    pegarFlor():IMarioState {
        console.log("100 pontos");
        return this;
    }
    pegarPena():IMarioState {
        console.log("Mario fogo");
        return this;
    }
    levarDano():IMarioState {
        console.log("Mario pequeno");
        return new MarioPequeno();
    }
}