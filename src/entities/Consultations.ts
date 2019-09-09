import { Patient } from './Patient';
import { Medecin } from './Medecins';

export class Consultation{
    commentaire:string;
    prescription:string;
    dateConsultation:Date;
    public patient:Patient[];
   public medecin:Medecin[];

}