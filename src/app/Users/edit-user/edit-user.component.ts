import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/entities/Utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/services/utilisateur.service';
import { Role } from 'src/entities/Role';
import { RoleService } from 'src/services/roles.services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
dateSy; 
dateValide:string;
mode:number=1;
utilisateurs:Utilisateur = new Utilisateur();
idUser:number;
listRole;
index;
lesRoles:any;
  index1: any;
  constructor(
    private datePipe:DatePipe,
    public activatedRoute:ActivatedRoute,
    public utilisateurservice:UtilisateurService,
    public router:Router,
    public roles: RoleService) {
    this.idUser=activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.getUtilisateur();
    this.chargerRoleUser();
  
    

    this.roles.getRoles()
    .subscribe(d => {
      this.listRole=d;
    });
    this.dateSy=this.datePipe.transform(new Date(),"yyyy-MM-dd");
    console.log("ddMMyyyy est" + this.dateSy);
  }
 getUtilisateur(){
  this.utilisateurservice.getUser(this.idUser)
  .subscribe(data=>{
    this.utilisateurs=data;
  },err=>{
    console.log(err);
  })
 }

 chargerRoleUser(){
   this.utilisateurservice.getRolesUser(this.idUser)
   .subscribe(d=>{
     this.lesRoles=d;
   }
    )
 }

  updateUser(){
    if(this.dateNaissance>this.dateSy)
    {
      this.dateValide="Date Naissance invalide !!";
    }
    else
    {
      this.utilisateurservice.updateUtilisateur(this.utilisateurs)
      .subscribe(d=>{
        this.utilisateurservice.deleteRoleUser(this.utilisateurs.username)
        .subscribe(del=>{
          this.lesRoles.forEach(rolename => {
            this.utilisateurservice.addRoleToUser(this.utilisateurs.username,rolename)
              .subscribe(d=>{  
        
              })
            });
        })

        alert("Mise a jour effectuee!");
        this.router.navigate(['listeUtilisateurs']);
      },err=>{
        console.log(err);
        alert("Probleme");
      })
    }

  }

  addRole(libelle:string){
    this.index=this.lesRoles.indexOf(libelle);
   if(this.lesRoles.indexOf(libelle)==-1){
    this.lesRoles.push(libelle);
   }
   else{
     this.lesRoles.splice(this.index,1);
   }
   
  }

  dateNaissance:Date;
  dateC:boolean=true;
  dateValidator(){
    if(this.dateNaissance>this.dateSy)
    {
     
       this.dateC=false;
    }
    else{
      this.dateC=true;
    }
  }
  isChecked(libelle:string){
    this.index1=this.lesRoles.indexOf(libelle);
    if(this.index1==-1){
     return false;
    }
    else{
      return true;
    }
    
  }
  changeStatut(statut:Boolean){
    if(statut) this.utilisateurs.enabled=false;
    else this.utilisateurs.enabled=true;
    console.log("statut:"+this.utilisateurs.enabled);
  }


}
