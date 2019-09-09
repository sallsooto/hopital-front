import { Component, OnInit } from '@angular/core';
import { PaysServices } from 'src/services/paysService';

@Component({
  selector: 'app-ajout-pays',
  templateUrl: './ajout-pays.component.html',
  styleUrls: ['./ajout-pays.component.css']
})
export class AjoutPaysComponent implements OnInit {

  constructor(private paysService:PaysServices) { }
  ajoutReussi:string;
  libellePays:string;
  ngOnInit() {
  }
  enregistrerPays(dataForm){
    this.paysService.savePays(dataForm)
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
  this.libellePays="";
}
}
