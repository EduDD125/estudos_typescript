import { Mario } from './Mario/Mario.js';
import { MarioCapa } from './Mario/MarioCapa.js';

const mario = new Mario();
console.log(".::Início de partida::.");
console.log("Mario Pequeno!");
mario.pegarCogumelo();
mario.mudarStatus(new MarioCapa());