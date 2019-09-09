import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/services/consultation.services';

@Component({
  selector: 'app-listes-consultation-dossier',
  templateUrl: './listes-consultation-dossier.component.html',
  styleUrls: ['./listes-consultation-dossier.component.css']
})
export class ListesConsultationDossierComponent implements OnInit {
  consultations;
  nom;
  prenom;
  data;

  motCle:string="";
  cuurentPage:number=0;
  size:number=5;
  pages:Array<number>;
  //totalPages:any;
 totalPages:Array<number>;


  constructor(private consultationService:ConsultationService) { }

  ngOnInit() {
    this.getConsultationsDossier();
  }

  getConsultationsDossier(){
    this.consultationService.getConsultationsDossier(this.motCle,this.cuurentPage,this.size)
    .subscribe(data=>{
      this.consultations=data;
      this.pages=new Array(data['totalPages']);
      console.log("voici les donnees");
      console.log(data);
    },err=>{
      console.log(err);
    })

  }


  onEditConsultation()
  {

  }

  onDeleteConsultation()
  {
    
  }
}
