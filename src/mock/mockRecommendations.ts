import { Recommendation } from "../domain/recommendation";
import { BOOKS } from "./mockBooks";
import { VALORATIONS } from "./mockValorations";

export const RECOMMENDATIONS: Recommendation[] = [
    new Recommendation(
      "Historias Cortas de Ciencia Ficción",
      'Jane Doe',
      "En un futuro donde las máquinas dominan el espacio exterior, un pequeño grupo de humanos lucha por sobrevivir. Esta colección reúne relatos que exploran la inteligencia artificial, los viajes intergalácticos y las fronteras de la ciencia moderna, presentando una visión fascinante del futuro.",
      [BOOKS[0], BOOKS[1]],
      [VALORATIONS[0],VALORATIONS[1]]
    ),
    new Recommendation(
      "La Filosofía del Zen",
      'David Gómez',
      "Este libro profundiza en las enseñanzas milenarias del Zen, una rama del budismo que enfatiza la meditación y la comprensión intuitiva del ser. A través de metáforas y historias breves, el autor invita al lector a reflexionar sobre la naturaleza del ser, la vida y el equilibrio interno.",
      [BOOKS[0], BOOKS[1]],
      [VALORATIONS[0], VALORATIONS[2]]
    ),
    new Recommendation(
      "Viajes por Mundos Desconocidos",
      'Elena Rodríguez',
      "Desde los océanos más profundos hasta los confines del espacio exterior, este libro lleva al lector a una travesía inolvidable. Explorando los límites de la realidad y la imaginación, el autor presenta una serie de aventuras que desafían las leyes de la física y de la mente humana.",
      [BOOKS[1], BOOKS[2]],
      [VALORATIONS[1], VALORATIONS[3]]
    ),
    new Recommendation(
      "El Arte de la Guerra Moderna",
      'Carlos Méndez',
      "Un análisis profundo de las estrategias militares contemporáneas, desde las guerras cibernéticas hasta las tácticas de guerrilla urbana. Este libro examina cómo las tecnologías avanzadas y los conflictos geopolíticos han transformado el campo de batalla moderno, ofreciendo una perspectiva única sobre el futuro de la guerra.",
      [BOOKS[2], BOOKS[3]],
      [VALORATIONS[2], VALORATIONS[4]]
    ),
    new Recommendation(
      "El Universo en Expansión",
      'Laura Fernández',
      "Este fascinante relato explora los últimos descubrimientos en cosmología, desde la teoría del Big Bang hasta la energía oscura. A través de una narrativa cautivadora, el autor nos lleva a comprender la inmensidad del universo y las incógnitas que aún desafían a los científicos de todo el mundo.",
      [BOOKS[1], BOOKS[3]],
      [VALORATIONS[0],VALORATIONS[1]]
    ),
    new Recommendation(
      "Misterios de la Historia Antigua",
      'Ricardo Silva',
      "Un viaje a través de los enigmas más grandes de las civilizaciones antiguas: desde las pirámides de Egipto hasta los secretos de la Atlántida. Este libro examina los misterios no resueltos y teorías fascinantes sobre culturas que dejaron un legado duradero, pero aún ocultan verdades por descubrir.",
      [BOOKS[0], BOOKS[3]],
      [VALORATIONS[0], VALORATIONS[4]]
    )
  ];