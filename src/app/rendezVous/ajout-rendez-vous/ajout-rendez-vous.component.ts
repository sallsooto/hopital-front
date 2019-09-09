import { Component, OnInit } from '@angular/core';
import { RVService } from 'src/services/rendezVousService';
import { ConsultationService } from 'src/services/consultation.services';
import { Dossier } from 'src/entities/Dossier';
import { ServiceServices } from 'src/services/ServiceServices';
import { DepartementServices } from 'src/services/departements.services';
import { Patient } from 'src/entities/Patient';

@Component({
  selector: 'app-ajout-rendez-vous',
  templateUrl: './ajout-rendez-vous.component.html',
  styleUrls: ['./ajout-rendez-vous.component.css']
})
export class AjoutRendezVousComponent implements OnInit {
leradio:boolean=false;
laSemaine;
patientExiste;
dossierExiste;
libelleDossiers:Dossier =new Dossier();
lepatient:Patient=new Patient();
libDossier:string;
lesHeures;
services;
medecinChoisie;
listMedecin;
dataCalendar;
calendarDate;
no_medecin:boolean;
patient;
nom;
prenom;
email;
adresse;
telephone;
nationalite;
dateNaissance;
departements;
dep_id;
service_id;
medecins;
numeroDossier:string="123";
numeroPiece;
nomDossier;
lieuNaissance;
barre:string="/";
medecin_id;
dateHeure;
rv;
rvExist;
messageRv;
dossier:Dossier=new Dossier();
  ajoutReussi: string;
  constructor(private rvService:RVService, private consultationService:ConsultationService,private serviceService:ServiceServices, private departementService:DepartementServices) { }

  ngOnInit() {
    this. getDepartement();
   
  }
  chargementRv(){
    this.rvService.getSemaine()
    .subscribe(data=>{
      this.laSemaine=data;
  console.log("le creneau"+this.laSemaine);
  this.rvService.getHeures()
  .subscribe(d=>{
    this.lesHeures=d;
  })
    },err=>{
      console.log(err);
    })
   }
  /* getServices(){
    this.serviceService.getAllServices()
    .subscribe(d=>{
      this.services=d;
    })
  } */
  getServicesDep(dep_id){
    this.serviceService.getServicesDep(this.dep_id)
    .subscribe(dd=>{
      this.services=dd;
    })
  }

  getDepartement(){
    this.departementService.getAllDepartements()
    .subscribe(d=>{
      this.departements=d;
    })
  }

   findPatient(){

   }
   findListMedecin(service_id){
    this.serviceService.getServicesMed(this.service_id)
    .subscribe(data=>{
      this.medecins=data;
    })
   }
   saveRv(){
    console.log("La valeur de dateHeure"+this.dateHeure);
     this.rvService.addRv(this.rv,this.lepatient.id+"",this.medecin_id,this.dateHeure)
     .subscribe(d=>{
      if(d!=null){
        console.log("Insertion reussie!!!!");
        this.ajoutReussi="Ce Rendez-Vous du "+this.dateHeure+" pour le patient "+this.nom+" "+this.prenom+" a été enregistré avec succès!";
        console.log("La valeur de dateHeure"+this.dateHeure);
      }
      else {
        console.log("Erreur Insertion!!!!!!");
        this.ajoutReussi="Erreur Insertion";
        console.log("La valeur de dateHeure"+this.dateHeure);
      }
     });

   }
   getCalendar(medecin_id,calendarDate){
     console.log("lid du medecin:"+medecin_id);
     this.rvService.verifieRvExist(this.lepatient.id+"",this.medecin_id)
    .subscribe(d=>{
      this.rvExist=d;
      console.log("letat desautres rv"+this.rvExist);
      if(this.rvExist==true){
        this.messageRv="Ce patient a deja un rendez Vous actif avec ce medecin";
        console.log("le message:"+this.messageRv);
        this.dataCalendar=null;
     }
     else{
       this.messageRv="";
       this.rvService.getCalendar(this.medecin_id,this.calendarDate)
       .subscribe(data=>{
         this.dataCalendar=data;
         console.log("les donnees de data calendar" + this.dataCalendar);
       });
     }
    });

   }

   getCalendar1(medecin_id,calendarDate){
      this.messageRv="";
      this.rvService.getCalendar(this.medecin_id,this.calendarDate)
      .subscribe(data=>{
        this.dataCalendar=data;
        console.log("les donnees de data calendar" + this.dataCalendar);
      });
  }
   recherchePatient(){
    this.consultationService.getDossier(this.numeroDossier)
    .subscribe(data=>{
      this.libelleDossiers=data;
      if (this.libelleDossiers!=null) {
        this.libDossier=this.libelleDossiers.libelleDossier;
        
        console.log("nom du dossier dans r p:"+this.libDossier);
        this.consultationService.getPatientDossier(this.numeroDossier)
        .subscribe(dp=>{
          this.lepatient=dp;
          this.nom=this.lepatient.nom;
          this.prenom=this.lepatient.prenom;
          this.lieuNaissance=this.lepatient.lieu;
          this.dateNaissance=this.lepatient.dateNaissance;
          this.numeroPiece=this.lepatient.numeroPiece;
          this.telephone=this.lepatient.telephone;
          this.email=this.lepatient.email;

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
     this.consultationService.getAntecedent(this.numeroDossier)
    .subscribe(d=>{ 
      this.patientExiste=true;
      this.dossierExiste=true;
      //this.lectureSeule=false;
     
    },error=>{
          this.patientExiste=false;
          this.dossierExiste=false;
        })
      
     
    },error=>{
      this.patientExiste=false;
      this.dossierExiste=false;
    })
  }

  saveRvNouveau(){
      this.patient=new Patient();
      this.patient.nom=this.nom;
      this.patient.prenom=this.prenom;
      this.patient.dateNaissance=this.dateNaissance;
      this.patient.email=this.email;
      this.patient.telephone=this.telephone;
      this.patient.numeroPiece=this.numeroPiece;
      this.dossier=new Dossier();
      this.dossier.libelleDossier=this.nomDossier;
      this.consultationService.savePatient(this.patient,this.nom,this.prenom,this.email,this.lieuNaissance,this.numeroPiece,this.telephone,this.dateNaissance)
      .subscribe(data=>{
        this.consultationService.getPatient(this.numeroPiece)
        .subscribe(d1=>{
          console.log("L'id du patient est:"+d1);
          this.consultationService.saveDossier(this.dossier,this.libDossier,d1)
          .subscribe(d2=>{
            console.log("Le nom du dossier:"+d2.libelleDossier);
            this.numeroDossier=d2.numeroDossier;
            console.log("Le num du dossier:"+this.numeroDossier);

            this.rvService.addRv(this.rv,d1+"",this.medecin_id,this.dateHeure)
            .subscribe(d=>{
             if(d!=null){
               console.log("Insertion reussie!!!!");
               this.ajoutReussi="Ce Rendez-Vous du "+this.dateHeure+" pour le patient "+this.nom+" "+this.prenom+" a été enregistré avec succès!";
               console.log("La valeur de dateHeure"+this.dateHeure);
             }
             else {
               console.log("Erreur Insertion!!!!!!");
               console.log("La valeur de dateHeure"+this.dateHeure);
               this.ajoutReussi="Erreur Insertion!";
             }
            }); 
          });
        });
       
      });
     
  }
   
  vider(){
    this.nom="";
    this.prenom="";
    this.dateNaissance=null;
    this.lieuNaissance="";
    this.email="";
    this.telephone="";
    this.numeroPiece="";
    this.numeroDossier="";
    this.medecin_id="";
    this.service_id="";
    this.dep_id="";
    this.dataCalendar=null;
    this.libDossier="";
    this.ajoutReussi="";
    this.lepatient=null;
  }
  nouveauPatient(){
    this.leradio=false;
    this.vider();
  }
  ancienPatient(){
    this.leradio=true;
    this.vider();
  }
     }