import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/entities/Departement';
import { DepartementServices } from 'src/services/departements.services';
import { NEXT } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-departement-ajout',
  templateUrl: './departement-ajout.component.html',
  styleUrls: ['./departement-ajout.component.css']
})
export class DepartementAjoutComponent implements OnInit {

  departements:Departement=new Departement();
  mode:number=1;
  constructor(private departementService:DepartementServices) { }

  ngOnInit() {
  }
 saveDepartement(){
  console.log(this.departements.libelledep);
  this.departementService.saveDepartement(this.departements,this.departements.libelledep)
  .subscribe(data=>{
    this.departements==data;
   
    this.mode=2;
  },err=>{
    console.log(err);
  })
 }
}
