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

export type RecommendationEditJSON = {
    titulo:string,
    librosRecomendados: Array<BookJSON>,
    contenido:string,
    publica:boolean,
    id:number
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

    toEditarJSON(): RecommendationEditJSON {
        return {
            titulo: this.title,
            librosRecomendados: this.recommendedBooks.map(it => it.toJSON()),
            contenido: this.description,
            publica: this._public,
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

