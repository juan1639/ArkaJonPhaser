import { Settings } from "../scenes/Settings.js";
import { Textos } from "../components/Textos.js";

function particulas(x, y, particula, vel, span, size, color, sprite, bool, scene)
{
  const partis = scene.add.particles(x, y, particula, {
    speed: vel,
    lifespan: span,
    scale: size,
    tint: color,
    // gravityY: 200
    blendMode: 'ADD'
  });

  partis.setDepth(Settings.depth.efectos);

  if (bool) partis.startFollow(sprite);
}

function sumaPuntos(puntos, scene)
{
  const bonus = Settings.getPuntos() + puntos.getData('puntos');
  Settings.setPuntos(bonus);
  scene.marcadorPtos.update(Settings.getTxtScore(), Settings.getPuntos());
  // console.log(bonus, Settings.getPuntos());
}

function restarVida()
{
  const actualizar = Settings.getVidas() - 1;
  Settings.setVidas(actualizar);
}

function playSonidos(id, loop, volumen)
{
  id.volume = volumen;
  id.loop = loop;
  id.play();
}

export {
  particulas,
  sumaPuntos,
  restarVida,
  playSonidos
};
