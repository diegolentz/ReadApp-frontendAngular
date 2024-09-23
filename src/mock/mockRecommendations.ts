import { Recommendation } from "../domain/recommendation";
import { BOOKS } from "./mockBooks";
import { VALORATIONS } from "./mockValorations";

export const RECOMMENDATIONS: Recommendation[] = [
    new Recommendation(
      "Coleccion de clasicos del terror",
      'Autor X',
      "Existen tres modos verbales: indicativo, subjuntivo e imperativo. El modo indicativo se utiliza para narrar hechos, procesos o estados que se consideran reales. El modo subjuntivo se utiliza para expresar sentimientos, pensamientos, emociones, deseos, pedidos, dudas y suposiciones. El modo imperativo se utiliza para dar órdenes y consejos",
      [BOOKS[0], BOOKS[1]],
      '',
      [VALORATIONS[0],VALORATIONS[1]]
    ),
    new Recommendation("A", '', "aaa", [BOOKS[1], BOOKS[2]], '', [VALORATIONS[1],VALORATIONS[2]]),
    new Recommendation("A", '', "aaa", [BOOKS[3], BOOKS[1]], '', [VALORATIONS[0],VALORATIONS[2]]),
    new Recommendation("A", '', "aaa", [BOOKS[2], BOOKS[1]], '', [VALORATIONS[1],VALORATIONS[2]]),
    new Recommendation("A", '', "aaa", [BOOKS[1], BOOKS[3]], '', [VALORATIONS[0],VALORATIONS[1]]),
    new Recommendation("A", '', "aaa", [BOOKS[3], BOOKS[1]], '', [VALORATIONS[0],VALORATIONS[1]]),
  ];