import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultationService } from 'src/services/consultation.services';
import { Patient } from 'src/entities/Patient';
import { Dossier } from 'src/entities/Dossier';
import { Medecin } from 'src/entities/Medecins';
import { Consultation } from 'src/entities/Consultations';
import { RVService } from 'src/services/rendezVousService';


@Component({
  selector: 'app-ajout-consultation',
  templateUrl: './ajout-consultation.component.html',
  styleUrls: ['./ajout-consultation.component.css']
})
export class AjoutConsultationComponent implements OnInit {
  data: any;

  constructor(private consultationService:ConsultationService,private rvService:RVService) { }
  patient:Patient;
  numeroDossier:string;
  libelleAntecedents:any;
  consultation:Consultation;
  medecin:Medecin=null;
  prescription:string;
  commentaire:string;
  ajoutReussi:string;
  patientExiste:boolean;
  dossierExiste:boolean=false;
  lepatient;
  libDossier:string;
  nomDossier;
  nom:string;
  prenom:string;
  dateNaissance:Date;
  email;
  lieu;
  telephone;
  patientNp;
  numeroPiece;
  message;
  leradio:boolean=false;
  
  dossier:Dossier=new Dossier();
   libelleDossiers:Dossier =new Dossier();
  ngOnInit() {
  }
  saveConsultation(){
    this.recherchePatient(this.numeroDossier);
   console.log("etat du patient:"+this.patientExiste);
    if(!this.patientExiste){
      console.log("dans le if");
      this.patient=new Patient();
      this.patient.nom=this.nom;
      this.patient.prenom=this.prenom;
      this.patient.dateNaissance=this.dateNaissance;
      this.patient.email=this.email;
      this.patient.telephone=this.telephone;
      this.patient.numeroPiece=this.numeroPiece;
      this.dossier=new Dossier();
      this.dossier.libelleDossier=this.nomDossier;
      //this.libelleDossiers.patient=this.lepatient;
      this.consultationService.savePatient(this.patient,this.nom,this.prenom,this.email,this.lieu,this.numeroPiece,this.telephone,this.dateNaissance)
      .subscribe(data=>{
        this.consultationService.getPatient(this.numeroPiece).subscribe(d1=>{
          console.log("L'id du patient est:"+d1);
          this.consultationService.saveDossier(this.dossier,this.nomDossier,d1)
          .subscribe(d2=>{
            console.log("Le nom du dossier:"+d2.libelleDossier);
            this.numeroDossier=d2.numeroDossier;
            console.log("Le num du dossier:"+this.numeroDossier);
            this.consultationService.saveConsultation(this.consultation,
              this.medecin,this.commentaire,this.prescription,this.numeroDossier)
              .subscribe(data=>{
                console.log("Le num du dossier:"+this.numeroDossier);
                this.ajoutReussi="Insertion Reussie";
                this.vider();
                if(data==null){
                  this.ajoutReussi="Erreur Insertion";
                }
              },error=>{
                this.ajoutReussi="Erreur Insertion";
              })
            
          });
        });
       
      });
    }
    else{
      this.consultationService.saveConsultation(this.consultation,
        this.medecin,this.commentaire,this.prescription,this.numeroDossier)
        .subscribe(data=>{
          console.log("Le num du dossier:"+this.numeroDossier);
          this.ajoutReussi="Insertion Reussie";
         this.vider();
          if(data==null){
            this.ajoutReussi="Erreur Insertion";
          }
        },error=>{
          this.ajoutReussi="Erreur Insertion";
        })
    }
     
  }
  saveConsultation1(){
      this.consultationService.saveConsultation(this.consultation,
        this.medecin,this.commentaire,this.prescription,this.numeroDossier)
        .subscribe(data=>{
          console.log("Le num du dossier:"+this.numeroDossier);
          this.ajoutReussi="Insertion Reussie";
         this.vider();
          if(data==null){
            this.ajoutReussi="Erreur Insertion";
          }
        },error=>{
          this.ajoutReussi="Erreur Insertion";
        })
  }
vider(){
  this.nom="";
  this.prenom="";
  this.dateNaissance=null;
  this.lieu="";
  this.email="";
  this.prescription="";
  this.commentaire="";
  this.telephone="";
  this.numeroPiece="";
  this.numeroDossier="";
  this.ajoutReussi="";
}
  recherchePatient(numDossier:string){
    this.rvService.chercherRvParNumDossier(numDossier)
    .subscribe(d1=>{
      if(d1!=null){
        this.message="";
        this.patientExiste=false;
        this.dossierExiste=false;
        this.consultationService.getDossier(numDossier)
        .subscribe(data=>{
          this.dossierExiste=true;
          this.libelleDossiers=data;
          if (this.libelleDossiers!=null) {
            this.libDossier=this.libelleDossiers.libelleDossier;
            console.log("nom du dossier dans r p:"+this.libDossier);
            this.consultationService.getPatientDossier(numDossier)
            .subscribe(dp=>{
              this.lepatient=dp;
              this.patientExiste=true;
              
            })
          //  this.lepatient=this.libelleDossiers.patient;
          }
          else{
            this.lepatient=null;
          }
          this.patientExiste=true;
         // this.lectureSeule=false;
          console.log("etat du patient dans r p:"+this.patientExiste);
          console.log("etat du dossier dans r p:"+this.dossierExiste);
         this.consultationService.getAntecedent(numDossier)
        .subscribe(d=>{
          this.patientExiste=true;
          this.dossierExiste=true;
          //this.lectureSeule=false;
         this.libelleAntecedents=d;
        },error=>{
              this.patientExiste=false;
              this.dossierExiste=false;
            })
          
         
        },error=>{
          this.patientExiste=false;
          this.dossierExiste=false;
        })
      }
      else{
        this.message="Aucun Rendez Vous trouvé pour ce patient!";
        this.vider();
      }
    })
   
  }
  nouveauPatient(){
    this.leradio=false;
  }
  ancienPatient(){
    this.leradio=true;
  }
}
