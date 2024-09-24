import { Book } from "../domain/book";

export const BOOKS = [
    new Book(
        "En las Montañas de la Locura",
        'H.P. Lovecraft',
        100000,  // words
        220,     // pages
        ["English", "Spanish", "French"],  // translations
        1500     // weekly sells
    ),
    
    new Book(
        "La Llamada de Cthulhu",
        'H.P. Lovecraft',
        45000,   // words
        140,     // pages
        ["English", "German", "Italian"],  // translations
        2100     // weekly sells
    ),
    
    new Book(
        "El Color que Cayó del Cielo",
        'H.P. Lovecraft',
        37000,   // words
        98,      // pages
        ["English", "Portuguese", "Russian"],  // translations
        1200     // weekly sells
    ),
    
    new Book(
        "La Sombra sobre Innsmouth",
        'H.P. Lovecraft',
        52000,   // words
        170,     // pages
        ["English", "Spanish", "Dutch"],  // translations
        1800     // weekly sells
    ),
]