

export type FriendJSON = {
    photo?: string,
    name?: string,
    email?: string
}


export class Friend {
    constructor(
        public photo: string = '',
        public name: string = '',
        public email: string = ''
    ) { }


    static fromJson(friendJSON: FriendJSON): Friend {
        return Object.assign(new Friend(), friendJSON)
    }

    toJSON(): FriendJSON {
        return {
            photo: this.photo,
            name: this.name,
            email: this.email

        }
    }
}

