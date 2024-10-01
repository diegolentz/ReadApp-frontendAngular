import { User } from "./user"


export type ValorationJSON = {
    score: number,
    comment: string
    author: User,
    // date: Date,
}

export class Valoration {
    constructor(
        public score: number = 0,   
        public comment: string = '',
        public author: User  ,
        public date: Date = new Date(1914, 14, 14),
    ) { }

    static fromJson(valorationJSON: ValorationJSON): Valoration {
        return new Valoration(
            valorationJSON.score,
            valorationJSON.comment,
            valorationJSON.author,
            // valorationJSON.date,
            
            )
    }
 
}

