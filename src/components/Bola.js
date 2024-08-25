import { Settings } from "../scenes/Settings";

export class Bola
{
    constructor(scene, args)
    {
        this.relatedScene = scene;
        this.args = args;
    }

    create()
    {
        const {x, y, velX, velY, scX, scY, orX, orY} = this.args;

        this.bola = this.relatedScene.physics.add.sprite(x, y, 'bola');

        this.bola.setData('vel-x', velX).setData('vel-y', velY);

        this.bola.setDepth(Settings.depth.bola);
        this.bola.setScale(scX, scY).setOrigin(orX, orY);
        this.bola.setX(x).setY(y);
        this.bola.setVelocityX(this.bola.getData('vel-x'));
        this.bola.setVelocityY(this.bola.getData('vel-y'));
        this.bola.setBounce(1);
        this.bola.setCollideWorldBounds(true);

        /* this.pala.setCircle(
            Math.floor((Settings.tileXY.y * scale) / 2.5),
            Math.floor((Settings.tileXY.x * scale) / 6),
            Math.floor((Settings.tileXY.y * scale) / 6)
        ); */
        
        //const {offSetX, offSetY, decay, power, color, samples, intensidad} = Settings.sombra;
        //this.bola.postFX.addShadow(offSetX, offSetY, decay, power, color, samples, intensidad);

        console.log(this.bola);
    }

    update()
    {
        const {offSetX, offSetY, color} = Settings.sombra;

        this.relatedScene.graphics.fillStyle(color, 0.6);

        this.relatedScene.graphics.fillCircle(
            this.bola.x + offSetX, this.bola.y + offSetY, this.bola.width / 2
        );
    }

    get()
    {
        return this.bola;
    }
}
