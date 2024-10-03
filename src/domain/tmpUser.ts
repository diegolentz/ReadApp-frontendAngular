import { CommonJSON, DomainObject } from "./common";


type UserBasicPivot = {
    fotoPath: string,
    nombre:string,
    apellido: string,
    alias: string,
    lenguaje: string,
    palabrasPorMinutos: number
};

export type UserBasicJSON = CommonJSON & UserBasicPivot;

export class UserBasic implements DomainObject{
    constructor(
        public id: number = -1,
        public fotoPath: string = "",
        public nombre: string = "",
        public apellido: string = "",
        public alias: string = "",
        public lenguaje: string = "",
        public palabrasPorMinutos: number = -1,
    ) { }

    public toJSON(user:UserBasic):UserBasicJSON {
        return {
            id: user.id,
            fotoPath: user.fotoPath,
            nombre: user.nombre,
            apellido: user.apellido,
            alias: user.alias,
            lenguaje: user.lenguaje,
            palabrasPorMinutos: user.palabrasPorMinutos
        }
    }
 
    public fromJSON(userJSON: UserBasicJSON): UserBasic {
        return Object.assign(new UserBasic() ,userJSON)
    }
}


export type UserProfilePivot = {
    fechaNacimiento: Date,
    email: string,
    perfil: Map<any, any>,
    tipoDeLector: Map<any, any>,
    amigos: Array<any>,
    librosLeidos: Array<any>,
    librosALeer: Array<any>,
    recomendacionesAValorar: Array<any>
}

export type UserProfileJSON = CommonJSON & UserBasicPivot & UserProfilePivot;

export class UserProfile implements DomainObject{
    constructor(
        public id: number = -1,
        public fotoPath: string = "",
        public nombre: string = "",
        public apellido: string = "",
        public alias: string = "",
        public lenguaje: string = "",
        public palabrasPorMinutos: number = -1,
        public fechaNacimiento:Date = new Date(),
        public email: string = "",
        public perfil: any = "",
        public tipoDeLector: any = "",
        public amigos: any = "",
        public librosLeidos: any = "",
        public librosALeer: any = "",
        public recomendacionesAValorar: any = "",
    ) { }
 
    public fromJSON(userJSON: UserProfileJSON): UserProfile {
        return Object.assign(new UserProfile(), userJSON)
    }

    public toJSON(user:UserProfile): UserProfileJSON {
        return {
            id: user.id,
            fotoPath: user.fotoPath,
            nombre: user.nombre,
            apellido: user.apellido,
            alias: user.alias,
            lenguaje: user.lenguaje,
            palabrasPorMinutos: user.palabrasPorMinutos,
            fechaNacimiento: user.fechaNacimiento,
            email: user.email,
            perfil: user.perfil,
            tipoDeLector: user.tipoDeLector,
            amigos: user.amigos,
            librosLeidos: user.librosLeidos,
            librosALeer: user.librosALeer,
            recomendacionesAValorar: user.recomendacionesAValorar
        }
    }
 
}
enum Language {
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