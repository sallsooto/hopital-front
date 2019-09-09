import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/services/utilisateur.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/entities/Utilisateur';

@Component({
  selector: 'app-utlisateurs',
  templateUrl: './utlisateurs.component.html',
  styleUrls: ['./utlisateurs.component.css']
})
export class UtlisateursComponent implements OnInit {
  utilisateurs;
  motCle:string="";
  cuurentPage:number=0;
  size:number=5;
  pages:any;
 totalPages:Array<number>;
 content:Array<number>;
 mode;
  constructor(private utilisateurService:UtilisateurService,public router:Router) { }

  ngOnInit() {
    this. getUtilisateur();
  }

  getUtilisateur(){
    this.utilisateurService.getUtilisateur(this.motCle,this.cuurentPage,this.size)
    .subscribe(data=>{
      this.utilisateurs=data;
      this.pages=new Array(data['totalPages']);
      console.log("voici les donnees");
      console.log(data);
    },err=>{
      console.log(err);
    })

  }

  chercher(){
    this.getUtilisateur();
  }
  gotoPage(i:number){
    this.cuurentPage=i;
    this.getUtilisateur();
  }

 currentUser;
  onEditUser(user){
    console.log("l'utilisateur:"+user.id+user.nom+user.prenom);
    this.router.navigate(['editUtilisateurs',user.id]);
    this.utilisateurService.updateUtilisateur(user)
    .subscribe(data=>{
      console.log("dans onedit");
      console.log(data);
      this.currentUser=data;
     // this.router.navigate(['editUtilisateurs',user.id]);
    
     },err=>{
        console.log("erreur:"+err);
     }
     )

    // this.router.navigate(['editUtilisateurs',id]);
  }
 
  onDeleteUser(u:Utilisateur){
      let c=confirm("Etes vous sure ?");
      if(!c) return;
        this.utilisateurService.deleteUtilisateur(u.id)
        .subscribe(data=>{
         this.getUtilisateur();
    
        
        },err=>{
          console.log(err);
        })
      
  
  }
}
