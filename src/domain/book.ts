export type BookJSON = {
    titulo: string
}

export class Book {
    constructor(
        public titulo:string = ''
    ){}

    static fromJson(recommendationJSON: BookJSON): Book {
        return Object.assign(new Book(), recommendationJSON)
    }
    
    toJSON(): BookJSON {
        return {
            titulo: this.titulo
        }
    }
}
