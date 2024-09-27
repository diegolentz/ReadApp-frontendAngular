export type BookJSON = {
    titulo: string,
    author: string,
    words: number,
    pages: number,
    translations: Array<string>,
    weeklySells: number,
    imagen : string 
}

export class Book {
    constructor(
        public titulo:string = '',
        public author: string = '',
        public words: number = 0,
        public pages: number = 0,
        public translations: Array<string> = [],
        public weeklySells: number = 0,
        public imagen : string = ''
    ){}

    static fromJson(recommendationJSON: BookJSON): Book {
        return Object.assign(new Book(), recommendationJSON)
    }
    
    toJSON(): BookJSON {
        return {
            titulo: this.titulo,
            author: this.author,
            words: this.words,
            pages: this.pages,
            translations: this.translations,
            weeklySells: this.weeklySells,
            imagen : this.imagen
        }
    }
}
