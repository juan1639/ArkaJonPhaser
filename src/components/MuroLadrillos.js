import { Settings } from "../scenes/Settings";
import { DataNiveles } from "./DataNiveles";

export class MuroLadrillos
{
    constructor(scene, args)
    {
        this.relatedScene = scene;
        this.args = args;
    }

    create()
    {
        this.muro = this.relatedScene.physics.add.staticGroup();

        for (let y = 0; y < DataNiveles.nivel_1.length; y ++)
        {
            for (let x = 0; x < DataNiveles.nivel_1[0].length; x ++)
            {
                const lx = x * Settings.TILE_SIZE.X;
                const ly = y * Settings.TILE_SIZE.Y;
                const valor = parseInt(DataNiveles.nivel_1[y][x]);
                
                if (valor !== 0)
                {
                    this.muro.create(lx, ly, 'ladrillo-plantilla')
                        .setData('valor', valor).setDepth(Settings.depth.ladrillos);

                    //console.log(lx, ly, valor);
                }
            }
        }

        const coloresArray = [
            0x111111,
            0xbda300,// irrompible-1
            0xd0d2d4,// plateado-2
            0xff4009,// rojo-3
            0x2ceae6,// azul-claro-4
            0xf1f120,// amarillo-5
            0xeeeeee,// blanco-6
            0x22ee11,// verde-7
            0xff8807,// naranja-8
        ];

        this.muro.children.iterate(ladri =>
        {
            ladri.setTint(coloresArray[ladri.getData('valor')]);
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
        const {offSetX, offSetY, color} = Settings.sombra;

        this.relatedScene.graphics.clear();
        this.relatedScene.graphics.fillStyle(color, 0.6);

        this.muro.children.iterate(ladri =>
        {
            this.relatedScene.graphics.fillRect(
                ladri.x, ladri.y, ladri.width, ladri.height
            );
        });
    }

    get()
    {
        return this.muro;
    }
}
