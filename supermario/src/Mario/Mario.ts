import { IMarioState } from "./IMarioState";
import { MarioPequeno } from "./MarioPequeno";

export class Mario {
    private estado: IMarioState;
    
    constructor() {
        this.estado = new MarioPequeno();
    }

    mudarStatus(estado: IMarioState) {
        this.estado = estado;
    }
    pegarCogumelo(): IMarioState{
        return this.estado.pegarCogumelo();
    }
    pegarFlor(): IMarioState{
        return this.estado.pegarFlor();
    }
    pegarPena(): IMarioState{
        return this.estado.pegarPena();
    }
    levarDano(): IMarioState{
        return this.estado.levarDano();
    }
}