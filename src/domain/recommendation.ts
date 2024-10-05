import { Book, BookJSON } from "./book"
import { User } from "./user"
import { Valoration, ValorationJSON } from "./valoration"

export type RecommendationJSON = {
    creador: string,
    librosRecomendados: Array<BookJSON>,
    titulo: string,
    contenido: string,
    publica: boolean,
    valoraciones: Array<ValorationJSON>,
    id: number
}

export class Recommendation {
    constructor(
        public author: string = "",
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
            recommendationJSON.librosRecomendados.map(it => Book.fromJson(it)),
            recommendationJSON.titulo,
            recommendationJSON.contenido,
            recommendationJSON.publica,
            recommendationJSON.valoraciones.map(it => Valoration.fromJson(it) ),
            recommendationJSON.id
            )
    }

    toJSON(): RecommendationJSON {
        return {
            creador: this.author,
            librosRecomendados: this.recommendedBooks.map(it => it.toJSON()),
            titulo: this.title,
            contenido: this.description,
            publica: this._public,
            valoraciones: this.valorations.map(it=> it.toJSON()),
            id:this.id,
        }
    }
}


export type RecommendationDetalleJSON = {
    librosRecomendados: Array<Book>,
    titulo: string,
    contenido: string,
    publica: boolean,
    valoraciones: Array<Valoration>,
    id: number
}

export class RecommendationDetalle {
    constructor(
        public id: number = 0,
        public recommendedBooks: Array<Book> = [],
        public title: string = '',
        public description: string = '',
        public _public: boolean = true,
        public valorations: Array<Valoration> = [],
    ) { }

    toJSON(): RecommendationDetalleJSON {
        return {
            id:this.id,
            librosRecomendados: this.recommendedBooks,
            titulo: this.title,
            contenido: this.description,
            publica: this._public,
            valoraciones: this.valorations
        }
    }
}