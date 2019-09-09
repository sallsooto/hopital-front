import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Departement } from 'src/entities/Departement';
//import { Observable } from 'rxjs';





@Injectable({
    providedIn: 'root'
  })
export class DepartementServices{
   public host:string="http://localhost:2000";
   headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })};

   constructor(private http:HttpClient) {}

   getAllDepartements(){
       return this.http.get<Departement>(this.host + "/departements" );
   }

   getDepartement(motCle:string,page:number,size:number){
    return this.http.get(this.host + "/chercherDepartements?mc=" + motCle + "&size=" + size + "&page=" + page);
   }

   saveDepartements(departements:Departement){  
    return this.http.post(this.host + "/ajoutDepartements" ,JSON.stringify(departements),this.headers);
    }
    saveDepartement(departement,libelledep:string){  
        return this.http.post(this.host + "/ajoutDepartement?libelledep="+libelledep,JSON.stringify(departement),this.headers);
        }

}