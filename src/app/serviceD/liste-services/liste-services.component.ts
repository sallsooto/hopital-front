import { Component, OnInit } from '@angular/core';
import { ServiceServices } from 'src/services/ServiceServices';

@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: ['./liste-services.component.css']
})
export class ListeServicesComponent implements OnInit {
  services=null;
  motCle:string="";
  cuurentPage:number=0;
  size:number=5;
  pages:Array<number>;
 totalPages:Array<number>;

  constructor(private serviceService:ServiceServices) { }

  ngOnInit() {
  }

  getService(){
    this.serviceService.getServices(this.motCle,this.cuurentPage,this.size)
    .subscribe(data=>{
      this.services=data;
      this.pages=new Array(data['totalPages']);
      console.log("voici les donnees");
      console.log(data);
    },err=>{
      console.log("Une erreur"+err);
    })

  }

  chercher(){
    this.getService();
  }

  gotoPage(i:number){
    this.cuurentPage=i;
    this.getService();
  }
}
