import { User } from "./user"


export type ValorationJSON = {
    autor: User,
    comentario: string,
    valor: number,
    // date: Date,
}

export class Valoration {
    constructor(
        public autor: User  ,
        public comentario: string = '',
        public valor: number = 0,   
        //public date: Date = new Date(1914, 14, 14),
    ) { }

    static fromJson(valorationJSON: ValorationJSON): Valoration {
        return new Valoration(
            valorationJSON.autor,
            valorationJSON.comentario,
            valorationJSON.valor,
            // valorationJSON.date,
            
            )
    }
 
}

