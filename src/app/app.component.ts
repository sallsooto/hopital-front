import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'HopitalApplication';
  constructor(private authService:AuthentificationService){}
  ngOnInit(): void {
    this.authService.loadToken();
  }
  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }
  isMedecin(){
    return this.authService.isMedecin();
  }
  isChefService(){
    return this.authService.isChefService();
  }
  isSecretaire(){
    return this.authService.isSecretaire();
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  logOut(){
    console.log("debut de logout");
    this.authService.logout();
  }
  val=false;
  accueil(){
    if(!this.val){
      this.val=true;
      return this.val;
    }
    else {
      this.val=false;
      return this.val;
    }
      
  }
}
