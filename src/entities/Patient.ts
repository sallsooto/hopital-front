import { Dossier } from './Dossier';

export class Patient{
   public  id:number;
   public numeroPiece:string;
   public nom:string;
   public prenom:string;
   public email:string;
   public telephone:string;
  public  dateNaissance:Date;
  public lieu:string;
  public  photo:string;
  public  dossier: Dossier[];

}