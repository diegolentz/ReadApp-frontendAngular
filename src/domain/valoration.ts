

export type ValorationJSON = {
    author: string,
    score: number,
    date: Date,
    comment: string
}

export class Valoration {
    constructor(
        public author: string,
        public score: number,
        public date: Date,
        public comment: string
    ) { }



    // static fromJson(recommendationJSON: RecommendationJSON): Recommendation {
    //     return Object.assign(new Recommendation(), recommendationJSON)
    // }

    // toJSON(): RecommendationJSON {
    //     return {
    //         titulo: this.titulo,
    //         pertenencia: this.pertenencia,
    //         descripcion: this.descripcion,
    //         librosRecomendados: this.librosRecomendados,
    //         puntuacion: this.puntuacion,
    //         tiempoEstimado: this.tiempoEstimado
    //     }
    // }
}

