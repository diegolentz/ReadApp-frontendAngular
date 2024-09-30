
export type UserJSON = {
      photo:string,
      name:string,
      lastName:string,
      alias:string,
      birthDate: Date,
      readVelocity:number,
      email: string,
      language:string,
      id:number
}


export class User{
    constructor(
      public photo:string = "",
      public name:string = "",
      public lastName:string = "",
      public alias:string = "",
      public birthDate: Date = new Date(),
      public readVelocity: number = -1,
      public email: string = "",
      public language: string = "",
      public id:number = -1
    ){}

    static fromJson(userJSON: UserJSON): User {
        return new User(
            userJSON.photo,
            userJSON.name,
            userJSON.lastName,
            userJSON.alias,
            userJSON.birthDate,
            userJSON.readVelocity,
            userJSON.email,
            userJSON.language,
            userJSON.id
            )
    }

}

enum Language{
    INGLES,
    ESPANIOL,
    ALEMAN,
    ITALIANO,
    PORTUGUES,
    MANDARIN,
    ARABE,
    RUSO,
    HINDI,
    FRANCES,
    BENGALI,
    JAPONES,
}