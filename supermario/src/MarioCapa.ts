import { IMarioState } from "./IMarioState";
import { MarioFogo } from "./MarioFogo";
import { MarioPequeno } from "./MarioPequeno";

export class MarioCapa implements IMarioState {
    pegarCogumelo(): IMarioState {
        console.log("100 pontos");
        return this;
    }
    pegarFlor(): IMarioState {
        console.log("Mario fogo");
        return new MarioFogo();
    }
    pegarPena(): IMarioState {
        console.log("100 pontos");
        return this;
    }
    levarDano(): IMarioState {
        console.log("Mario pequeno");
        return new MarioPequeno();
    }
}