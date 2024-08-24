import { Scene } from 'phaser';
import { Settings } from './Settings';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        //this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(0, 0, 'fondo-arkanoid').setOrigin(0, 0);

        this.muro = this.physics.add.group([
            {
                key: 'ladrillo-plantilla',
                frame: 0,
                repeat: 10,
                setXY: { x: 128, y: 128, stepX: 64 },
            },
            {
                key: 'ladrillo-plantilla',
                frame: 0,
                repeat: 10,
                setXY: { x: 128, y: 160, stepX: 64 },
            },
            {
                key: 'ladrillo-plantilla',
                frame: 0,
                repeat: 10,
                setXY: { x: 128, y: 192, stepX: 64 },
            }
        ]);

        this.muro.children.iterate(ladri => {
            ladri.setTint(0xffff00);

            const {offSetX, offSetY, decay, power, color, samples, intensidad} = Settings.sombra;
            //ladri.postFX.addShadow(-5, 5, 0.06, 0.9, 0x111111, 2, 0.8);
            ladri.postFX.addShadow(offSetX, offSetY, decay, power, color, samples, intensidad);
        });

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');
        });
    }
}
