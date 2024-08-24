import { Scene } from 'phaser';
import { Settings } from './Settings';
import { MuroLadrillos } from '../components/MuroLadrillos';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    init()
    {
        this.muro = new MuroLadrillos(this, {});
    }

    preload()
    {
    }

    create ()
    {
        //this.cameras.main.setBackgroundColor(0x00ff00);
        this.add.image(0, 0, 'fondo-arkanoid').setOrigin(0, 0);

        if (Settings.audio.breakoutMusic.isPlaying)
        {
            Settings.audio.breakoutMusic.pause();
        }

        this.muro.create();

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');
        });
    }
}
