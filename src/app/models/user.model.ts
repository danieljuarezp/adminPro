
export class User {

    constructor(
        public firstname: string,
        public lastname: string,
        public username: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public settings?: string,
        public active?: boolean,
        public google?: boolean,
        public _id?: string
    ) {
    }
}