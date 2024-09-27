//autor devuelta por el backend
export type AuthorJSON = {
  nombre: string;
  apellido: string;
  id: number; 
};

//libro devuelta por el backend
export type BookJSON = {
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
    public translations: Array<string>,
    public weeklySells: number = 0,
    public imagen: string = ''
  ) {}

  // Convertir de JSON a Book
  static fromJson(bookJSON: BookJSON): Book {
    const nombreApellido = `${bookJSON.autor.nombre} ${bookJSON.autor.apellido}`;
    return new Book(
      bookJSON.autor.id,   // Usar el id del autor desde el JSON
      bookJSON.titulo,
      nombreApellido,  
      bookJSON.cantidadPalabras,
      bookJSON.cantidadPaginas,
      bookJSON.traducciones,
      bookJSON.ventasSemanales,
      bookJSON.imagen
    );
  }

  // Convertir de Book a JSON
  toJSON(): BookJSON {
    // Dividir el nombre completo en nombre y apellido
    const [nombre, apellido] = this.author.split(' ');

    return {
      titulo: this.titulo,
      autor: {
        nombre: nombre,
        apellido: apellido,
        id: this.id, // Usar el id de la propiedad `id` del objeto `Book`
      },
      cantidadPalabras: this.words,
      cantidadPaginas: this.pages,
      traducciones: this.translations,
      ventasSemanales: this.weeklySells,
      imagen: this.imagen,
    };
  }
}
