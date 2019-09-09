import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtlisateursComponent } from './Users/utlisateurs/utlisateurs.component';
import { InscriptionComponent } from './Users/inscription/inscription.component';
import { AjoutConsultationComponent } from './consultations/ajout-consultation/ajout-consultation.component';
import { DepartementAjoutComponent } from './departements/departement-ajout/departement-ajout.component';
import { DepartementsComponent } from './departements/departements/departements.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListesConsultationComponent } from './consultations/listes-consultation/listes-consultation.component';
import { ListesConsultationDossierComponent } from './consultations/listes-consultation-dossier/listes-consultation-dossier.component';
import { AjoutRendezVousComponent } from './rendezVous/ajout-rendez-vous/ajout-rendez-vous.component';
import { ListeRendezVousComponent } from './rendezVous/liste-rendez-vous/liste-rendez-vous.component';
import { AjoutServiceComponent } from './serviceD/ajout-service/ajout-service.component';
import { AjoutPaysComponent } from './paysD/ajout-pays/ajout-pays.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './auths/login/login.component';
import { ListeServicesComponent } from './serviceD/liste-services/liste-services.component';

const appRoutes:Routes=[
  {path:'inscriptions',component:InscriptionComponent},
  {path:'listeUtilisateurs',component:UtlisateursComponent},
  {path:'departements',component:DepartementsComponent},
  {path:'nouveauDepartements',component:DepartementAjoutComponent},
  {path:'editUtilisateurs/:id',component:EditUserComponent},
  {path:'consultations',component: AjoutConsultationComponent},
  {path:'listesConsultations',component: ListesConsultationComponent},
  {path:'ajoutRendezVous',component:  AjoutRendezVousComponent},
  {path:'listeRendezVous',component:   ListeRendezVousComponent},
  {path:'listesConsultationsDossier',component:  ListesConsultationDossierComponent},
  {path:'ajoutService',component:AjoutServiceComponent},
  {path:'listeService',component:ListeServicesComponent},
  {path:'ajoutPays',component: AjoutPaysComponent},
  {path:'login',component: LoginComponent},
  {path:'',redirectTo:'/',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    UtlisateursComponent,
    InscriptionComponent,
    AjoutConsultationComponent,
    DepartementAjoutComponent,
    DepartementsComponent,
    EditUserComponent,
    UtlisateursComponent,
    ListesConsultationComponent,
    ListesConsultationDossierComponent,
    AjoutRendezVousComponent,
    ListeRendezVousComponent,
    AjoutServiceComponent,
    AjoutPaysComponent,
    LoginComponent,
    ListeServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
