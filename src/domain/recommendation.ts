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
    valoracionTotal: number
    id: number
}

export type RecommendationEditJSON = {
    titulo:string,
    librosRecomendados: Array<BookJSON>,
    contenido:string,
    publica:boolean,
    id:number
}

export type RecommendationCardJSON = {
    id:number,
    title: string,
    isEditable: boolean,
    isDeletable: boolean,
    isPublic: boolean,
    content: string,
    bookTitles: Array<string>,
    popularity: number,
    aproxTime: number
}
export class Recommendation {
    constructor(
        public author: string = "",
        public recommendedBooks: Array<Book> = [],
        public title: string = '',
        public description: string = '',
        public _public: boolean = true,
        public valorations: Array<Valoration> = [],
        public valoracionTotal: number = 0,
        public id: number = 0
    ) { }

    get cantidadLibros() {
        return this.recommendedBooks.length
    }

    static fromJson(recommendationJSON: RecommendationJSON): Recommendation {
        
        return new Recommendation(
            recommendationJSON.creador,
            recommendationJSON.librosRecomendados.map(it => Book.fromJson(it)),
            recommendationJSON.titulo,
            recommendationJSON.contenido,
            recommendationJSON.publica,
            recommendationJSON.valoraciones.map(it => Valoration.fromJson(it) ),
            recommendationJSON.valoracionTotal,
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
            valoracionTotal: this.valoracionTotal,
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


export class RecommendationCard {
    constructor(
        public id:number = -1,
        public title: string = "Title",
        public editable: boolean = true,
        public deletable: boolean = true,
        public _public: boolean = true,
        public content: string = "Content",
        public bookTitles: Array<string> = [""],
        public popularity: number = 0,
        public aproxTime: number = 0
    ) { }

    get cantidadLibros() {
        return this.bookTitles.length
    }

    static fromJson(recommendationJSON: RecommendationCardJSON): RecommendationCard {
        return Object.assign(new RecommendationCard(), recommendationJSON);
    }

    toJSON(): RecommendationCardJSON {
        return {
            id: this.id,
            title: this.title,
            isEditable: this.editable,
            isDeletable: this.deletable,
            isPublic: this._public,
            content: this.content,
            bookTitles: this.bookTitles,
            popularity: this.popularity,
            aproxTime: this.aproxTime
        }
    }

}