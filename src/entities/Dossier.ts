import { Patient } from './Patient';

export class  Dossier {
    id:number;
    numeroDossier:string;
    libelleDossier:string;
    public patient: Patient[];
    
}