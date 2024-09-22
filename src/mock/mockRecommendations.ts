import { Recommendation } from "../domain/recommendation";
import { BOOKS } from "./mockBooks";

export const RECOMMENDATIONS: Recommendation[] = [
    new Recommendation("A", true, "aaa", [BOOKS[0], BOOKS[1]], 5, 10),
    new Recommendation("B", false, "aaa", [BOOKS[1]], 1.5, 3),
    new Recommendation("C", true, "aaa", [BOOKS[2]], 2.5, 4),
    new Recommendation("D", false, "aaa", [BOOKS[3]], 6.5, 20),
    new Recommendation("R", true, "aaa", [BOOKS[0]], 1.5, 100),
    new Recommendation("F", false, "aaa", [BOOKS[1]], 2.5, 40),
  ];