import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})

export class AuthentificationService{
 
  
    jwt:string;
    username:string;
    roles:Array<string>;

   public host2:string="http://localhost:2000";
    constructor(private http:HttpClient){}
    login(data){
        return this.http.post(this.host2 + "/login",data,{observe:'response'});
    }
    saveToken(jwt: string) {
       localStorage.setItem('token',jwt);
        this.jwt=jwt;
        this.parseJWT();
      }

  parseJWT(){
      let jwtHelper=new JwtHelperService();
      let objJWT=jwtHelper.decodeToken(this.jwt);
      this.username=objJWT.obj;
      this.roles=objJWT.roles;
     // console.log("le nom d'utilisateur"+objJWT.obj);
  }

  isAdmin(){
  return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
  return this.roles.indexOf('USER')>=0;
  }
  isMedecin(){
  return this.roles.indexOf('MEDECIN')>=0;
  }
  isChefService(){
  return this.roles.indexOf('CHEFSERVICE')>=0;
  }
  isSecretaire(){
    return this.roles.indexOf('SECRETAIRE')>=0;
    }
  isAuthenticated(){
      return this.roles && (this.isAdmin() || this.isUser());
  }
  loadToken() {
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
  logout() {
   localStorage.removeItem('token');
   this.initParams();
  }
  initParams(){
    this.jwt=undefined;
   this.username=undefined;
   this.roles=undefined;
  }
}
