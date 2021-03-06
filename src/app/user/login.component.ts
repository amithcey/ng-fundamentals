import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: red; padding-left: 10px }
    `]
})
export class LoginComponent {
    username
    password
    mouseOverLogin

    constructor(private authService: AuthService,
        private router: Router) { }

    login(formValues) {
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}