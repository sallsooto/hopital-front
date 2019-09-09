import { Component, OnInit } from '@angular/core';
import { DepartementServices } from 'src/services/departements.services';
import { Departement } from 'src/entities/Departement';



@Component({
  selector: 'app-d',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})

export class DepartementsComponent implements OnInit {
  departements=null;
  motCle:string="";
  cuurentPage:number=0;
  size:number=5;
  pages:Array<number>;
 totalPages:Array<number>;
  //pageDepartements:Departement[];
  constructor(private departementService:DepartementServices) { }

  ngOnInit() {
    this.getDepartement();
  }

  getAllDepartements(){
    this.departementService.getAllDepartements()
    .subscribe(data=>{
      this.departements=data;
     console.log("voici les donnees");
      console.log(data);
    },err=>{
      console.log(err);
    })

  }
    getDepartement(){
      this.departementService.getDepartement(this.motCle,this.cuurentPage,this.size)
      .subscribe(data=>{
        this.departements=data;
        this.pages=new Array(data['totalPages']);
        console.log("voici les donnees");
        console.log(data);
      },err=>{
        console.log("Une erreur"+err);
      })

    }

    chercher(){
      this.getDepartement();
    }

    gotoPage(i:number){
      this.cuurentPage=i;
      this.getDepartement();
    }
}
