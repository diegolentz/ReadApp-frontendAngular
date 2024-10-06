import { User } from "./user"


export type ValorationJSON = {
    author: string,
    score: number,
    fecha: Date,
    comentario: string
}

export class Valoration {
    constructor(
        public autor: string,
        public valor: number = 0,   
        public fecha: Date = new Date(1914, 14, 14),
        public comentario: string 
    ) { }

    static fromJson(valorationJSON: ValorationJSON): Valoration {
        return new Valoration(
            valorationJSON.author,
            valorationJSON.score,
            valorationJSON.fecha,
            valorationJSON.comentario
            )
    }

    toJSON() : ValorationJSON{
        return{
            author: this.autor,
            score: this.valor,
            fecha: this.fecha,
            comentario: this.comentario
        } 

    }
 
}

