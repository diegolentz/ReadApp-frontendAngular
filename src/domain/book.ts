//autor devuelta por el backend
export type AuthorJSON = {
    nombre: string;
    apellido: string;
    id: number;
};

//libro devuelta por el backend
export type BookJSON = {
    
    id: number,
    autor: AuthorJSON; // me qedo con los datos qe me interesan de autor(nombre/apellido/id)
    cantidadPalabras: number;
    titulo: string;
    cantidadPaginas: number;
    traducciones: Array<string>;
    ventasSemanales: number;
    imagen: string;
};

export class Book {
    constructor(
        public id: number = 0,
        public titulo: string = '',
        public author: string = '',
        public words: number = 0,
        public pages: number = 0,
        public translations: number = 0,
        public weeklySells: number = 0,
        public imagen: string = ''
    ) { }

    // Convertir de JSON a Book
    static fromJson(bookJSON: BookJSON): Book {
        const nombreApellido = `${bookJSON.autor.nombre} ${bookJSON.autor.apellido}`;
        return new Book(
            bookJSON.id,
            bookJSON.titulo,
            nombreApellido,
            bookJSON.cantidadPalabras,
            bookJSON.cantidadPaginas,
            bookJSON.traducciones[0].length,
            bookJSON.ventasSemanales,
            bookJSON.imagen
        );
    }
}

