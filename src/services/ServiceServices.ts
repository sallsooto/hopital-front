import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Service } from 'src/entities/Servicee';
import { Departement } from 'src/entities/Departement';
@Injectable({
    providedIn: 'root'
})
export class ServiceServices {
    public host: string = "http://localhost:2000";
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) { }
    getAllServices() {
        return this.http.get(this.host + "/listeServices");
    }

    
   getAllDepartements(){
    return this.http.get<Departement>(this.host + "/departements" );
}
    getServicesDep(motCle: string) {
        return this.http.get(this.host + "/chercherServiceDep?mc=" + motCle);
    }
    getService(id: string) {
        return this.http.get(this.host + "/findServiceById?id=" + id);
    }

    getServices(motCle:string,page:number,size:number){
        return this.http.get(this.host + "/chercherService?mc=" + motCle + "&size=" + size + "&page=" + page);
       }
    getServicesMed(motCle: string) {
        return this.http.get(this.host + "/chercherMedService?mc=" + motCle);
    }
    saveService(service:Service,libelleService:string,iddep:string) {
        return this.http.post(this.host + "/ajouterService?libelleService=" + libelleService+"&iddep="+iddep, JSON.stringify(service), this.headers);
    }

    deleteService(id:number){
        return this.http.delete(this.host + "/supprimeService/" + id);
    }  
}
