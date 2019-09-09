import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Patient } from 'src/entities/Patient';
import { Consultation } from 'src/entities/Consultations';
import { Medecin } from 'src/entities/Medecins';
import { Dossier } from 'src/entities/Dossier';






@Injectable({
    providedIn: 'root'
})
export class ConsultationService{
    public host:string="http://localhost:2000";
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};
    
    constructor(public http:HttpClient){}
    
    savePatient(patient:Patient,nom:string,prenom:string,email:string,lieu:string,numeroPiece:string,telephone:string,dateNaissance:Date){  
        return this.http.post<any>(this.host + "/ajoutPatient1?nom="+ nom + "&prenom=" + prenom + "&email=" + email + "&lieu=" + lieu + "&numeroPiece=" + numeroPiece + "&telephone=" + telephone + "&dateNaissance=" + dateNaissance,JSON.stringify(patient),this.headers);
        }
    gePatients(motCle:string,page:number,size:number){
        return this.http.get(this.host + "/chercherPatients?mc=" + motCle + "&size=" + size + "&page=" + page);
        } 
       
       getPatientDossier(numDossier:string){
        return this.http.get<any>(this.host + "/chercherPatientDossier?mc=" + numDossier);
        } 

    getDossier(numDossier:string){
        return this.http.get<any>(this.host + "/chercherDossier?mc=" + numDossier);
        }
        getPatient(numPiece:string){
            return this.http.get<any>(this.host + "/chercherPatientByNumPiece?mc=" + numPiece);
            }
        saveDossier(dossier:Dossier,libelle:string,patient_id){  
            return this.http.post<any>(this.host + "/ajoutDossier1?libelleDossier="+libelle+"&patient="+patient_id ,JSON.stringify(dossier),this.headers);
            }
    getAntecedent(numDossier:string){
        return this.http.get<any>(this.host + "/chercherAntecedents?mc=" + numDossier)
    }

    getPatientById(id:number){
         return this.http.get<Patient>(this.host + "/patient/" +  id);
        }  
    updatePatient(patient:Patient){
        return this.http.put<Patient>(this.host + "/modifiePatient/" + patient.id ,patient);
    } 
    
    deletePatient(id:number){
        return this.http.delete(this.host + "/supprimePatient/" + id);
    }   
    getConsultationsMed(matricule:string,page:number,size:number){
        return this.http.get(this.host + "/chercherConsultationsMed?mc=" + matricule + "&size=" + size + "&page=" + page);
       }
         
       getConsultationsDossier(numDossier:string,page:number,size:number){
        return this.http.get(this.host + "/chercherConsultationsDossier?mc=" + numDossier + "&size=" + size + "&page=" + page);
       }   

    saveConsultation(consultation:Consultation,medecin:Medecin,commentaire:string,prescription:string,dossier:string){  
        return this.http.post<any>(this.host + "/ajoutConsultation?"+ 
    "medecin="+medecin+"&commentaire="+commentaire+"&prescription="+prescription
        +"&dossier="+dossier ,JSON.stringify(consultation),this.headers);
        }
      
}