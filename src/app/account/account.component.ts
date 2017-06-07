import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl : './account.component.html',
    styleUrls:['account.component.css']
})
export class AccountComponent{

    constructor(
       private router : Router
    ){}

    login_click()
    {
        alert('login');
        this.router.navigate(['main']);
    }

    create_click()
    {
        alert('create');
        this.router.navigate(['main']);
    }
}