import { Settings } from "../scenes/Settings";

export class MuroLadrillos
{
    constructor(scene, args)
    {
        this.relatedScene = scene;
        this.args = args;
    }

    create()
    {
        this.muro = this.relatedScene.physics.add.group([
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

        /* this.jugador.setCircle(
            Math.floor((Settings.tileXY.y * scale) / 2.5),
            Math.floor((Settings.tileXY.x * scale) / 6),
            Math.floor((Settings.tileXY.y * scale) / 6)
        ); */

        console.log(this.muro);
    }

    update()
    {
    }

    get()
    {
        return this.muro;
    }
}
