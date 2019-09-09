import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Datevalid } from './Datevalid';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurService{
    public host:string="http://localhost:2000";
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })};
    
    constructor(public http:HttpClient){}
    
    saveUtilisateurs(utilisateur:Utilisateur){  
        return this.http.post<any>(this.host + "/ajoutUtilisateurs" ,JSON.stringify(utilisateur),this.headers);
        }
    getUtilisateur(motCle:string,page:number,size:number){
        return this.http.get(this.host + "/chercherUtilisateurs?mc=" + motCle + "&size=" + size + "&page=" + page);
        } 

    getUser(id:number){
         return this.http.get<Utilisateur>(this.host + "/utilisateur/" +  id);
        }  
    getRolesUser(id){
        return this.http.get(this.host + "/rolesUser?idUser=" + id);
        }  

    updateUtilisateur(utilisateur:Utilisateur){
        return this.http.post<Utilisateur>(this.host + "/updateUtilisateurs",JSON.stringify(utilisateur),this.headers);
    } 
    
    deleteUtilisateur(id:number){
        return this.http.delete(this.host + "/supprimeUtilisateur/" + id);
    }   
     
    deleteRoleUser(username){
        return this.http.post(this.host + "/deleteAllRolesUser?username=" + username,JSON.stringify(username),this.headers);
    }  

    addRoleToUser(username:string,rolename:string){
        return this.http.post<any>(this.host + "/addRoleToUser?username=" + username + "&rolename=" + rolename ,JSON.stringify(username),this.headers); 
    }

    verifieUser(username){
        return this.http.post(this.host + "/verifieUsername?username=" + username,JSON.stringify(username),this.headers);
    }  
    
    verifieDate(date:Datevalid){
        return this.http.post<Boolean>(this.host + "/dateNaissanceValide" ,JSON.stringify(date),this.headers);
    }
    
   getAllSpecialite(){
    return this.http.get<any>(this.host + "/specialites" );
}
    
}