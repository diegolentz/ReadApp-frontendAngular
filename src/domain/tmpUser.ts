import { HttpErrorResponse } from "@angular/common/http";
import { CommonJSON, DomainObject } from "./common";


type UserBasicPivot = {
    fotoPath: string,
    nombre: string,
    apellido: string,
    alias: string,
    lenguaje: string,
    palabrasPorMinutos: number
};

export type UserBasicJSON = CommonJSON & UserBasicPivot;

export class UserBasic implements DomainObject {
    constructor(
        public id: number = -1,
        public fotoPath: string = "",
        public nombre: string = "",
        public apellido: string = "",
        public alias: string = "",
        public lenguaje: string = "",
        public palabrasPorMinutos: number = -1,
    ) { }

    public fromJSON(userJSON: UserBasicJSON): UserBasic {
        return Object.assign(new UserBasic(), userJSON)
    }

    public toJSON(user: UserBasic): UserBasicJSON {
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

}


export type UserProfilePivot = {
    fechaNacimiento: Date,
    email: string,
    perfil: Array<PerfilDeLectura>,
    tipoDeLector: string,
    amigos: Array<any>,
    librosLeidos: Array<any>,
    librosALeer: Array<any>,
    recomendacionesAValorar: Array<any>
}

export type UserProfileJSON = CommonJSON & UserBasicPivot & UserProfilePivot;

export class UserProfile implements DomainObject {
    constructor(
        public id: number = -1,
        public fotoPath: string = "",
        public nombre: string = "",
        public apellido: string = "",
        public alias: string = "",
        public lenguaje: string = "",
        public palabrasPorMinutos: number = -1,
        public fechaNacimiento: Date = new Date(),
        public email: string = "",
        public perfil: Array<PerfilDeLectura> = [new PerfilDeLectura("")],
        public tipoDeLector: string = "",
        public amigos: any = "",
        public librosLeidos: any = "",
        public librosALeer: any = "",
        public recomendacionesAValorar: any = "",
    ) { }

    public fromJSON(userJSON: UserProfileJSON): UserProfile {
        return Object.assign(new UserProfile(), userJSON)
    }

    public toJSON(user: UserProfile): UserProfileJSON {
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

export class PerfilDeLectura{
    constructor(
        public perfil:string,
        public rangoMin?:number,
        public rangoMax?:number
    ){}
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


//Prueba para info de usuario

export class UserInformacion{
    constructor(
    public id: number,
    public nombre: string | null = null,
    public apellido: string | null = null, 
    public alias: string | null = null,
    public palabrasPorMinutos: number | null = null,
    public fechaNacimiento:Date | null = null,
    public email: string | null = null,
    public perfil: Array<string> | null = null,
    public tipoDeLector: string | null = null)
    {

    }
}


export class UserProfileFriend implements DomainObject {
    constructor(
        public id: number = -1,
        public fotoPath: string = "",
        public nombre: string = "",
        public apellido: string = "",
        public alias: string = "",
        public amigos: Array<UserFriend> = [],
    ) { }

    public fromJSON(userProfileFriendJSON: UserProfileFriendJSON): UserProfileFriend {

        return new UserProfileFriend(
            userProfileFriendJSON.id,
            userProfileFriendJSON.fotoPath,
            userProfileFriendJSON.nombre,
            userProfileFriendJSON.apellido,
            userProfileFriendJSON.alias,
            userProfileFriendJSON.amigos.map((friendJSON) => {
                return UserFriend.prototype.fromJSON(friendJSON)
            })
        )
    }

    //ARREGLAR
    public toJSON(user: UserProfile): UserProfileJSON {
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

export class UserFriend implements DomainObject {
    constructor(
        public id: number = -1,
        public fotoPath: string = "",
        public nombre: string = "",
        public apellido: string = "",
        public alias: string = "",
    ) { }

    public fromJSON(userFriendJSON: UserFriendJSON): UserFriend {
        return Object.assign(new UserFriend(), userFriendJSON)
    }

    //ARREGLAR
    public toJSON(user: UserProfile): UserProfileJSON {
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

export type UserFriendPivot = {
    fotoPath: string,
    nombre: string,
    apellido: string,
    alias: string,
}

export type UserProfileFriendPivot = {
    fotoPath: string,
    nombre: string,
    apellido: string,
    alias: string,
    amigos: Array<UserFriendJSON>
}

export type UserFriendJSON = CommonJSON & UserFriendPivot;

export type UserProfileFriendJSON = CommonJSON & UserProfileFriendPivot;

