import { Component, OnInit } from '@angular/core';
import { ServiceServices } from 'src/services/ServiceServices';
import { DepartementServices } from 'src/services/departements.services';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.css']
})
export class AjoutServiceComponent implements OnInit {
  listDepartement;
  ajoutReussi;
  libelleService;
  service;

  constructor(private serviceService:ServiceServices,private departementService:DepartementServices) { }

  ngOnInit() {
    this.departements();
  }

  enregistrerService(dataForm){
    this.serviceService.saveService(this.service,dataForm.libelleService,dataForm.departement)
      .subscribe(data=>{
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
  this.libelleService="";
}

  departements(){
    this.serviceService.getAllDepartements()
    .subscribe(data=>{
      this.listDepartement=data;
     console.log("voici les donnees");
      console.log(data);
    },err=>{
      console.log(err);
    })
   }

   
}
