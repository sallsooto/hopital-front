import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/services/consultation.services';
import { Consultation } from 'src/entities/Consultations';

@Component({
  selector: 'app-listes-consultation',
  templateUrl: './listes-consultation.component.html',
  styleUrls: ['./listes-consultation.component.css']
})
export class ListesConsultationComponent implements OnInit {
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
    this.getConsultationsMed();
  }

  getConsultationsMed(){
    this.consultationService.getConsultationsMed(this.motCle,this.cuurentPage,this.size)
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
