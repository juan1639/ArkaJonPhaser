import { Scene } from 'phaser';
import { Settings } from './Settings';
import { MuroLadrillos } from '../components/MuroLadrillos';
import { Pala } from '../components/Pala';
import { Bola } from '../components/Bola';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    init()
    {
        this.muro = new MuroLadrillos(this, {});

        this.pala = new Pala(this, {

            x: Settings.jugador.INI_X,
            y: Settings.jugador.INI_Y,
            vel: Settings.jugador.VEL,
            scX: 1.2,
            scY: 1.5,
            orX: 0.5,
            orY: 0.5
        });

        this.bola = new Bola(this, {

            x: Settings.bola.INI_X,
            y: Settings.bola.INI_Y,
            velX: Settings.bola.VEL_INI_X,
            velY: Settings.bola.VEL_INI_Y,
            scX: 1,
            scY: 1,
            orX: 0.5,
            orY: 0.5
        });
    }

    preload()
    {
    }

    create ()
    {
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height);
        this.physics.world.setBoundsCollision(true, true, true, true);

        //this.cameras.main.setBackgroundColor(0x00ff00);
        this.add.image(0, 0, 'fondo-arkanoid').setOrigin(0, 0).setDepth(Settings.depth.fondo);

        this.graphics = this.add.graphics();

        if (Settings.audio.breakoutMusic.isPlaying)
        {
            Settings.audio.breakoutMusic.pause();
        }

        this.muro.create();
        this.pala.create();
        this.bola.create();

        /* this.input.once('pointerdown', () => {

            this.scene.start('GameOver');
        }); */
    }

    update()
    {
        this.graphics.clear();
        
        this.muro.update();
        this.bola.update();
    }
}
