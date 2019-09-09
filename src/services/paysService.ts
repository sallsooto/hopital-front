import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pays } from 'src/entities/Pays';

@Injectable({
    providedIn: 'root'
})

export class PaysServices{
    public host:string="http://localhost:2000";
    headers = {
     headers: new HttpHeaders({
         'Content-Type': 'application/json'
     })};
 
    constructor(private http:HttpClient) {}
 
    getAllPays(){
        return this.http.get(this.host + "/listePays" );
    }
 
    getPays(motCle:string,page:number,size:number){
     return this.http.get(this.host + "/chercherPays?mc=" + motCle + "&size=" + size + "&page=" + page);
    }
 
    savePays(pays:Pays){  
     return this.http.post(this.host + "/ajouterPays" ,JSON.stringify(pays),this.headers);
     }

     deletePays(id:number){
        return this.http.delete(this.host + "/supprimePays/" + id);
    }  
 
 }