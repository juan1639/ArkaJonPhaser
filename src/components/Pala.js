import { Settings } from "../scenes/Settings";

export class Pala
{
    constructor(scene, args)
    {
        this.relatedScene = scene;
        this.args = args;
    }

    create()
    {
        const {x, y, vel, scX, scY, orX, orY} = this.args;

        this.pala = this.relatedScene.physics.add.sprite(x, y, 'pala');

        this.pala.setData('vel', vel);

        this.pala.setScale(scX, scY).setOrigin(orX, orY);
        this.pala.setX(x).setY(y);
        this.pala.setVelocityX(0).setVelocityY(0);
        this.pala.setCollideWorldBounds(true);
        this.pala.setImmovable(true);
        this.pala.setInteractive({draggable: true});

        /* this.pala.setCircle(
            Math.floor((Settings.tileXY.y * scale) / 2.5),
            Math.floor((Settings.tileXY.x * scale) / 6),
            Math.floor((Settings.tileXY.y * scale) / 6)
        ); */

        this.relatedScene.input.on('drag', (pointer, gameObject, dragX) =>
        {
            gameObject.x = dragX;
        });

        console.log(this.pala);
    }

    update()
    {
    }

    get()
    {
        return this.pala;
    }
}
