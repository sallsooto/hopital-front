import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/services/roles.services';
import { Utilisateur } from 'src/entities/Utilisateur';
import { UtilisateurService } from 'src/services/utilisateur.service';
import { DatePipe } from '@angular/common';
import { ServiceServices } from 'src/services/ServiceServices';
import { DepartementServices } from 'src/services/departements.services';
import { Datevalid } from 'src/services/Datevalid';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  dateSy;
  service;
  specialite;
  services;
  departements;
  listSpecialite;
  dep_id;
  nom:string;
  prenom:string;
  dateNaissance:Date;
  email;
  lieu;
  telephone;
 username;
  password;
  confirmedPassword;
  libelle;
  photo;
  ajoutReussi:string;
  dateValide:string;
  listRole;
  lesRoles:Array<string>=[''];
  mode;
  index;
  date:Datevalid;
  constructor(private roleServices:RoleService,private serviceService:ServiceServices,private utilisateurService:UtilisateurService,private datePipe:DatePipe, private departementService:DepartementServices) {
   }

  ngOnInit() {
    this.getSpecialite();
    this.getDepartement();
    this.roles();
    this.dateSy=this.datePipe.transform(new Date(),"yyyy-MM-dd");
   console.log("ddMMyyyy est" + this.dateSy);
  }
  onNewUser(){
    this.mode='newUser';
  }


  onSaveUsers(dataForm){
    if(this.dateNaissance>this.dateSy)
    {
      this.dateValide="Date Naissance invalide !!";
      console.log("dans le if");
    }
    else{
     
      this.utilisateurService.saveUtilisateurs(dataForm)
      .subscribe(data=>{
        console.log("l'ensemble des roles choisis:"+this.lesRoles);
        this.lesRoles.forEach(rolename => {
          if(rolename!=''){
            this.utilisateurService.addRoleToUser(dataForm.username,rolename)
          .subscribe(d=>{  
            console.log("le username"+ dataForm.username + " le role"+rolename);
              
          });
          }
          
        });
      
       this.vider();
       this.ajoutReussi="Insertion Reussie";
        
            if(data==null){
              this.ajoutReussi="Erreur Insertion";
            }
      },err=>{
        this.ajoutReussi="Erreur Insertion";
      })
    }

  }
 dateC;

  dateValidator(){
    if(this.dateNaissance>this.dateSy)
    {
     
       this.dateC=false;
    }
    else{
      this.date=new Datevalid();
      this.date.dateNaiss=this.dateNaissance;
      console.log("la date valide est:"+this.date.dateNaiss);
      this.utilisateurService.verifieDate(this.date)
      .subscribe(d=>{
        this.dateC=d;
      })
    }
  }

 roles(){
  this.roleServices.getRoles()
  .subscribe(data=>{
    this.listRole=data;
   console.log("voici les donnees");
    console.log(data);
  },err=>{
    console.log(err);
  })
 }
samePasswords(){
  if(this.password==this.confirmedPassword)
  return true;
  else return false;
}
 vider(){
  this.nom="";
  this.prenom="";
  this.dateNaissance=null;
  this.lieu="";
  this.email="";
  this.telephone="";
  this.username="";
  this.password="";
  this.libelle="";
  this.photo="";
  this.ajoutReussi="";
  this.dateValide="";
  this.confirmedPassword="";
  this.lesRoles=[''];
 
}

addRole(libelle:string){
  this.index=this.lesRoles.indexOf(libelle);
 if(this.lesRoles.indexOf(libelle)==-1){
  this.lesRoles.push(libelle);
  console.log("les roles choisis"+this.lesRoles);
 }
 else{
   this.lesRoles.splice(this.index,1);
    console.log("les roles choisis"+this.lesRoles);
 }
 
}
userExist;
messageUser:string="Cet utilisateur existe déjà";
verifieUser(){
  this.utilisateurService.verifieUser(this.username)
  .subscribe(d=>{
    this.userExist=d;
  })
}

verifieDatevalide(){
 
}

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

getSpecialite(){
  this.utilisateurService.getAllSpecialite()
  .subscribe(d=>{
    this.listSpecialite=d;
  })
}
med;
isMedecin(){
  this.med=this.lesRoles.indexOf("MEDECIN");
  if(this.med==-1) return false;
  else return true;
}

}
