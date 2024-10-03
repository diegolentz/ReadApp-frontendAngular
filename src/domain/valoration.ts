import { User } from "./user"


export type ValorationJSON = {
    autor: User,
    comentario: string,
    valor: number,
    fecha: Date,
}

export class Valoration {
    constructor(
        public autor: User = new User(),
        public comentario: string = '',
        public valor: number = 0,   
        public fecha: Date = new Date(1914, 14, 14),
    ) { }

    static fromJson(valorationJSON: ValorationJSON): Valoration {
        return new Valoration(
            valorationJSON.autor,
            valorationJSON.comentario,
            valorationJSON.valor,
            valorationJSON.fecha,
            
            )
    }
 
}

