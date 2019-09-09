import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthentificationService,
    private router:Router) { }

  ngOnInit() {
  }
  onLogin(data){
  console.log(data);
    this.authService.login(data)
    .subscribe(resp=>{
      console.log("le token"+resp.headers.get('Authorization'));
      let jwt=resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigateByUrl("/");
    },err=>{
          console.log("une erreur" +err);
    })
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
 

}
