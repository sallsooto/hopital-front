import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/entities/Role';


@Injectable({
    providedIn: 'root'
})
export class RoleService{
    public host:string="http://localhost:2000";
    constructor(private http: HttpClient){}

    public getRoles(){
        return this.http.get<Role>(this.host + "/listeRoles");
    }
}