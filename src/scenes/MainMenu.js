import { Scene } from 'phaser';
import { Textos } from '../components/Textos.js';
import { particulas, playSonidos } from '../functions/Functions.js';
import { BotonNewGame } from '../components/BotonNewGame.js';
import { Settings } from './Settings.js';

export class MainMenu extends Scene
{
    constructor()
    {
        super({key: 'MainMenu'});
    }

    init()
    {
        this.botoninicio = new BotonNewGame(this, {

            left: Math.floor(this.sys.game.config.width / 2),
            top: Math.floor(this.sys.game.config.height / 1.25),
            id: 'boton-new-game',
            scX: 0.6, scY: 0.5, angle: 1, originX: 0.5, originY: 0.5,
            texto: ' New Game ', nextScene: 'Game'
        });

        this.txt = new Textos(this, {
            x: Math.floor(this.sys.game.config.width / 2),
            y: 0,
            txt: ' ArkaJon ',
            size: 110, color: '#ff5', style: 'bold',
            stroke: '#1cb', sizeStroke: 16,
            shadowOsx: 2, shadowOsy: 2, shadowColor: '#111',
            bool1: false, bool2: true, origin: [0.5, 0.5],
            elastic: Math.floor(this.sys.game.config.height / 4), dura: 3000
        });
    }

    create()
    {
        Settings.audio.breakoutMusic = this.sound.add('breakout-music');
        
        this.add.image(0, 0, 'fondo-arkanoid').setOrigin(0, 0);

        const aparecerBoton = 1800; // 1800

        this.txt.create();
        this.txt.get().setDepth(Settings.depth.textos);

        this.add.timeline([
            {
                at: aparecerBoton,
                run: () => {
                    this.botoninicio.create();

                    particulas(
                        this.sys.game.config.width / 2,
                        this.sys.game.config.height / 5,
                        'particula1',
                        {min: 60, max: 120},
                        {min: 2500, max: 3000},
                        {start: 0.2, end: 0},
                        0xffcc11,
                        null, false, this
                    );  
                }
            }
        ]).play();

        playSonidos(Settings.audio.breakoutMusic, false, 0.7);

        console.log(this.txt);
    }
}
