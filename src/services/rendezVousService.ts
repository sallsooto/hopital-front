import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from 'src/entities/Patient';


@Injectable({
    providedIn: 'root'
})
export class RVService{
    public host:string="http://localhost:2000";
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};
    
    constructor(public http:HttpClient){}
    

    getSemaine(){
        return this.http.get(this.host + "/rv1");
       }

       getHeures(){
        return this.http.get(this.host + "/rv2");
       }
       getCalendar(med_id:string,dateP:string){
        return this.http.get(this.host + "/calendar?medecin_id=" + med_id + "&datePaterne=" + dateP);
       }

       verifieRvExist(patient_id:string,med_id:string){
        return this.http.get(this.host + "/trouverRvParMedEtPatient?patient_id=" + patient_id + "&med_id=" + med_id);
       }
       
       chercherRvParNumDossier(numDossier:string){
        return this.http.get(this.host + "/chercherRvParNumDossier?numDossier="+numDossier);
       }
       addRv1(patient:Patient,medecin_id:string,dateRv:string){
        return this.http.post(this.host + "/rvadd?medecin_id=" + medecin_id +
         "&dateRv=" + dateRv,JSON.stringify(patient),this.headers);
       }
       addRv(rv,patient_id:string,medecin_id:string,dateRv:string){
        return this.http.post(this.host + "/rvadd?patient_id=" + patient_id 
        + "&medecin_id=" + medecin_id + "&dateRv=" + dateRv,JSON.stringify(rv),this.headers);
       }


         
  
  
      
}