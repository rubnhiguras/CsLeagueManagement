export class PropsBarPage{
    username: string;
    urlProfile: string;
    userArt: string;

    constructor(username: string, urlProfile:string, userArt:string){
        this.username = username;
        this.urlProfile= urlProfile; 
        this.userArt = userArt;
    }
} 