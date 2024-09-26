import { Component, Input } from '@angular/core';
import { BotoneraLibroComponent } from '../botonera-libro/botonera-libro.component';
import { Book } from '../../domain/book';
@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [BotoneraLibroComponent],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})

export class LibroComponent {
  @Input() book!:Book;
  

  constructor() {
  //   this.libros = [
  //     new Libro(
  //      ,
  //       "El bosque negro",
  //       "Diego",
  //       "300",
  //       "100,000",
  //       "5",
  //       "10,000"
  //     ),
  //     new Libro(
  //       ,
  //       "El mar en calma",
  //       "Ana",
  //       "250",
  //       "80,000",
  //       "3",
  //       "8,000"
  //     ),
  //     new Libro(
  //       ,
  //       "Sombras en la noche",
  //       "Luis",
  //       "320",
  //       "120,000",
  //       "4",
  //       "12,000"
  //     ),
  //     new Libro(
  //       ,
  //       "La ciudad perdida",
  //       "Marta",
  //       "280",
  //       "90,000",
  //       "6",
  //       "9,500"
  //     ),
  //     new Libro(
  //       "https://st.booknet.com/uploads/covers/220/1548248964_73.jpg",
  //       "El misterio del lago",
  //       "Jorge",
  //       "310",
  //       "110,000",
  //       "7",
  //       "11,000"
  //     ),
  //     new Libro(
  //       "https://http2.mlstatic.com/D_NQ_NP_998326-MLC54028482109_022023-O.webp",
  //       "Un viaje inesperado",
  //       "Carlos",
  //       "290",
  //       "85,000",
  //       "2",
  //       "6,500"
  //     ),
  //     new Libro(
  //       "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/54fbdd8d-9558-4328-bd98-983b52175273/m_175_310/329653_el-ultimo-refugio_9786070768958_3d_202104151753.webp",
  //       "El último refugio",
  //       "Elena",
  //       "300",
  //       "95,000",
  //       "8",
  //       "13,000"
  //     ),
  //     new Libro(
  //       "https://tse2.mm.bing.net/th?id=OIP.hrEnCP84kpA99IFJkR7BywAAAA&pid=Api&P=0&h=180",
  //       "La última frontera",
  //       "Laura",
  //       "315",
  //       "105,000",
  //       "4",
  //       "11,500"
  //     ),
  //     new Libro(
  //       "https://media.s-bol.com/qPn8Q9DA0q0/550x827.jpg",
  //       "Caminos de fuego",
  //       "Silvia",
  //       "310",
  //       "100,000",
  //       "4",
  //       "10,500"
  //     )
  //   ];
  }
}

// export class Libro {
//   constructor(
//     public imagen: string,
//     public titulo: string,
//     public autor: string,
//     public paginas: string,
//     public palabras: string,
//     public traducciones: string,
//     public ventasSemanales: string
//   ) {}
// }
