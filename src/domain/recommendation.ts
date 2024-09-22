import { Book } from "./book"

export type RecommendationJSON = {
    titulo: string,
    pertenencia: boolean,
    descripcion: string,
    librosRecomendados: Array<Book>,
    puntuacion: number,
    tiempoEstimado: number
}

export class Recommendation {
    constructor(
        public titulo: string = '',
        public pertenencia: boolean = false,
        public descripcion: string = '',
        public librosRecomendados: Array<Book> = [],
        public puntuacion: number = 10,
        public tiempoEstimado: number = 10
    ) { }

    get cantidadLibros() {
        return this.librosRecomendados.length
    }

    static fromJson(recommendationJSON: RecommendationJSON): Recommendation {
        return Object.assign(new Recommendation(), recommendationJSON)
    }

    toJSON(): RecommendationJSON {
        return {
            titulo: this.titulo,
            pertenencia: this.pertenencia,
            descripcion: this.descripcion,
            librosRecomendados: this.librosRecomendados,
            puntuacion: this.puntuacion,
            tiempoEstimado: this.tiempoEstimado
        }
    }
}

