
export class Settings
{
    // true=keyboard, false=mobile touch
    static CONTROL_KEYBOARD = true;

    static SCREEN =
    {
        WIDTH: 1024,
        HEIGHT: 768,
        SC_BOUNDS_X: 1.35,
        SC_BOUNDS_Y: 1.90
    };

    static TILE_SIZE =
    {
        X: 64,
        Y: 32
    };

    static SCALE_GAME = 1;
    static FPS = 60;
    static FPS_30 = false;

    static marcadores =
    {
        puntos: 0,
        nivel: 1,
        hi: 7000,
        vidas: 3,
    };

    static fontSettings =
    {
        id: 'font-fire',
        arrayLetras: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-@',
        size: 48,
        osX: 4,
        osY: 4,
        oriX: 0.5,
        oriY: 0.5,
        color: 0xffff00,
        alpha: 0.3
    };

    static pausa =
    {
        inicial: {
            activa: false,
            duracion: 4300
        },
        jugadorDies: {
            activa: false,
            duracion: 3100
        },
        pausaGenerica: {
            activa: false,
            duracion: 500,
        },
        nivelSuperado: {
            activa: false,
            duracion: 3500
        }
    };

    static jugador =
    {
        INI_X: Settings.SCREEN.WIDTH / 2,
        INI_Y: Settings.SCREEN.HEIGHT / 1.1,
        VEL: 250,
    };

    static bola =
    {
        INI_X: Settings.SCREEN.WIDTH / 2,
        INI_Y: Settings.SCREEN.HEIGHT / 1.2,
        VEL_INI_X: 600,
        VEL_INI_Y: -600,
    };

    static CAMERA_CONTROLES =
    {
        X: 0,
        Y: Settings.SCREEN.HEIGHT - (128 * 2), // 128px buttons controls
        ANCHO: 600,
        ALTO: 400,
        SCROLL_X: -70,
        SCROLL_Y: -1080
    };

    static CAMERA_SCORES =
    {
        X: 0,
        Y: 0,
        ANCHO: Settings.SCREEN.WIDTH,
        ALTO: 34,
        SCROLL_X: 0,
        SCROLL_Y: -90
    };

    static depth =
    {
        fondo: -500,
        bola: 100,
        item: 200,
        ladrillos: 300,
        jugador: 400,
        efectos: 600,
        botones: 650,
        marcadores: 700,
        controles: 800,
        textos: 900
    };

    static sombra =
    {
        offSetX: 9,
        offSetY: 9,
        decay: 0.06,
        power: 0.9,
        color: 0x111111,
        samples: 2,
        intensidad: 0.8
    };
    
    static audio =
    {
        numKey: null,
        key: null,
        breakoutMusic: null
    };

    /* static RECORDS =
    {
        URL_GET: process.env.URL_GET,
        URL_POST: process.env.URL_POST,
        URL_G: 'https://ejemplo-node-railway-production.up.railway.app/all',
        URL_P: 'https://ejemplo-node-railway-production.up.railway.app/create',
    }; */

    // -----------------------------------------------------------------
    //  Getters
    //  
    // -----------------------------------------------------------------
    static getCONTROL_KEYBOARD()
    {
        return Settings.CONTROL_KEYBOARD;
    }

    static getSCALE_GAME()
    {
        return Settings.SCALE_GAME;
    }
    
    static getFPS()
    {
        return Settings.FPS;
    }

    static getFPS_30()
    {
        return Settings.FPS_30;
    }

    static isNivelSuperado()
    {
        return Settings.pausa.nivelSuperado.activa;
    }

    static getPuntos()
    {
        return Settings.marcadores.puntos;
    }

    static getNivel()
    {
        return Settings.marcadores.nivel;
    }

    static getRecord()
    {
        return Settings.marcadores.hi;
    }

    static getVidas()
    {
        return Settings.marcadores.vidas;
    }

    static isInvisible()
    {
        return Settings.jugador.invisible;
    }

    // --------------------------------------------------------------
    //  S E T T E R S
    //  
    // --------------------------------------------------------------
    static setCONTROL_KEYBOARD(bool)
    {
        Settings.CONTROL_KEYBOARD = bool;
    }

    static setSCALE_GAME(valor)
    {
        Settings.SCALE_GAME = valor;
    }

    static setFPS_30(bool)
    {
        Settings.FPS_30 = bool;
    }

    static setNivelSuperado(bool)
    {
        Settings.pausa.nivelSuperado.activa = bool;
    }

    static setPuntos(valor)
    {
        Settings.marcadores.puntos = valor;
    }

    static setNivel(valor)
    {
        Settings.marcadores.nivel = valor;
    }

    static setRecord(valor)
    {
        Settings.marcadores.hi = valor;
    }

    static setVidas(valor)
    {
        Settings.marcadores.vidas = valor;
    }

    static setInvisible(bool)
    {
        Settings.jugador.invisible = bool;
    }
}
