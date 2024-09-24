import { Book } from "./book"
import { Valoration } from "./valoration"

export type RecommendationJSON = {
    titulo: string,
    author: string,
    descripcion: string,
    librosRecomendados: Array<Book>,
    valorations: Array<Valoration>
}

export class Recommendation {
    constructor(
        public titulo: string = '',
        public author: string = '',
        public descripcion: string = '',
        public librosRecomendados: Array<Book> = [],
        public valorations: Array<Valoration> = []
    ) { }

    get cantidadLibros() {
        return this.librosRecomendados.length
    }
    getScore(){
        return this.substractScoreFromValorations() 
    }
    
    private substractScoreFromValorations(){
        let score = 0
        this.valorations.forEach(valoration => {
          score += valoration.score
        });
        return score
    }


    static fromJson(recommendationJSON: RecommendationJSON): Recommendation {
        return Object.assign(new Recommendation(), recommendationJSON)
    }

    toJSON(): RecommendationJSON {
        return {
            titulo: this.titulo,
            author: this.author,
            descripcion: this.descripcion,
            librosRecomendados: this.librosRecomendados,
            valorations: this.valorations
        }
    }
}

