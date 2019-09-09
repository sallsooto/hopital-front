import { Medecin } from './Medecins';
import { Departement } from './Departement';

export class Service{
    public id:number;
    public libelleService:string;
    public medecin: Medecin[];
    public departement: Departement[];
}