import { Book } from "./book"
import { User } from "./user"
import { Valoration } from "./valoration"

export type RecommendationJSON = {
    creador: User,
    librosRecomendados: Array<Book>,
    titulo: string,
    contenido: string,
    publica: boolean,
    valoraciones: Array<Valoration>,
    id: number
}

export class Recommendation {
    constructor(
        public author: User = new User(),
        public recommendedBooks: Array<Book> = [],
        public title: string = '',
        public description: string = '',
        public _public: boolean = true,
        public valorations: Array<Valoration> = [],
        public id: number = 0
    ) { }

    get cantidadLibros() {
        return this.recommendedBooks.length
    }
    getScore(){
        return this.substractScoreFromValorations() 
    }
    
    private substractScoreFromValorations(){
        let score = 0
        this.valorations.forEach(valoration => {
          score += valoration.valor
        });
        return score
    }


    static fromJson(recommendationJSON: RecommendationJSON): Recommendation {
        
        return new Recommendation(
            recommendationJSON.creador,
            recommendationJSON.librosRecomendados,
            recommendationJSON.titulo,
            recommendationJSON.contenido,
            recommendationJSON.publica,
            recommendationJSON.valoraciones,
            recommendationJSON.id
            )
    }

    toJSON(): RecommendationJSON {
        return {
            id:this.id,
            creador: this.author,
            librosRecomendados: this.recommendedBooks,
            titulo: this.title,
            contenido: this.description,
            publica: this._public,
            valoraciones: this.valorations
        }
    }
}

