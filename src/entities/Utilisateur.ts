import { Role } from './Role';

export class Utilisateur{
    public id:number;
    public nom:string;
    public prenom:string;
    public dateNaissance:Date;
    public lieu:string;
    public email:string;
    public telephone:string;
    public photo: string;
    public username: string;
    public password: string;
    public enabled: boolean;
    public roles: Role[];
}