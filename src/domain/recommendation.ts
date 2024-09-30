import { Book } from "./book"
import { User } from "./user"
import { Valoration } from "./valoration"

export type RecommendationJSON = {
    author: User,
    librosRecomendados: Array<Book>,
    titulo: string,
    contenido: string,
    publica: boolean,
    valorations: Array<Valoration>,
    id: number
}

export class Recommendation {
    constructor(
        public author: User = new User(),
        public librosRecomendados: Array<Book> = [],
        public titulo: string = '',
        public descripcion: string = '',
        public publica: boolean = true,
        public valorations: Array<Valoration> = [],
        public id: number = 0
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
        return new Recommendation(
            recommendationJSON.author,
            recommendationJSON.librosRecomendados,
            recommendationJSON.titulo,
            recommendationJSON.contenido,
            recommendationJSON.publica,
            recommendationJSON.valorations,
            recommendationJSON.id
            )
    }

    // toJSON(): RecommendationJSON {
    //     return {
    //         author: this.author,
    //         librosRecomendados: this.librosRecomendados,
    //         titulo: this.titulo,
    //         descripcion: this.descripcion,
    //         publica: this.publica,
    //         valorations: this.valorations
    //     }
    // }
}

