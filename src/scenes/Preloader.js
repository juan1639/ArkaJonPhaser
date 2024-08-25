import { Scene } from 'phaser';
import { Textos } from '../components/Textos';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        const widthScreen = this.sys.game.config.width;
        const heightScreen = this.sys.game.config.height;

        this.add.image(0, 0, 'fondo').setOrigin(0, 0);

        this.txt = new Textos(this, {
            x: Math.floor(this.sys.game.config.width / 2),
            y: Math.floor(this.sys.game.config.height / 3),
            txt: ' Cargando... ',
            size: 60, color: '#ffa', style: 'bold',
            stroke: '#fb1', sizeStroke: 16,
            shadowOsx: 2, shadowOsy: 2, shadowColor: '#111',
            bool1: false, bool2: true, origin: [0.5, 0.5],
            elastic: false, dura: 0
        });

        this.txt.create();

        this.add.rectangle(
            Math.floor(widthScreen / 2), Math.floor(heightScreen / 2),
            Math.floor(widthScreen / 1.5), Math.floor(heightScreen / 12)
        ).setStrokeStyle(1, 0xffee88);

        const bar = this.add.rectangle(
            Math.floor(widthScreen / 2) - Math.floor(widthScreen / 3) + 4,
            Math.floor(heightScreen / 2),
            4,
            Math.floor(heightScreen / 14),
            0xff9911
        );

        this.load.on('progress', (progress) => {
            bar.width = (Math.floor(widthScreen / 1.52) * progress);
        });
    }

    preload ()
    {
        this.load.setPath('assets');

        this.load.image('fondo', '/img/bg.png');
        this.load.image('fondo-arkanoid', '/img/fondo-arkanoid-1024x768.png');
        this.load.image('tile-fondo-arkanoid', '/img/bg-arkanoid-tile.png');

        this.load.image('boton-new-game', '/img/ui-newgame.png');
        this.load.image('boton-ui-1', '/img/ui-1.png');
        this.load.spritesheet('boton-fullscreen', '/img/boton-fullscreen.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('radio-buttons', '/img/radio-buttons-ssheet.png', {frameWidth: 50, frameHeight: 50});

        this.load.image('particula1', '/img/particula1.png');
        this.load.image('cruceta-controles', '/img/cruceta-up.png');

        this.load.image('ladrillo-plantilla', '/img/ladrillo-plantilla.png');
        this.load.image('pala', '/img/pala.png');
        this.load.image('bola', '/img/bola.png');

        //  Archivos de audio
        this.load.audio('key', '/audio/key.wav');
        this.load.audio('numkey', '/audio/numkey.wav');
        this.load.audio('breakout-music', '/audio/breakout-music.mp3');
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
