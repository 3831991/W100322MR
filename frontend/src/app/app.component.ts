import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    logout() {
        const sub = this.http.get<void>("http://localhost:3000/logout", { withCredentials: true }).subscribe(() => {
            this.utility.user = undefined;
            sub.unsubscribe();
            this.router.navigate(['']);
        });
    }

    constructor(public utility: UtilityService, private http: HttpClient, private router: Router) {}

    ngOnInit() {
        this.utility.setGlobalStyling();

        const sub = this.http.get<UserStatus>("http://localhost:3000/login-status", { withCredentials: true }).subscribe(data => {
            if (data.status === 'error') {
                console.log(data.message);
            } else if (data.status === 'loggedin') {
                this.utility.user = data.user;
            }

            sub.unsubscribe();
        });
    }
}

export interface UserLoggedin {
    id: number;
    fullName: string;
    email: string;
}

export interface UserStatus {
    status: 'loggedin' | 'error';
    user?: UserLoggedin;
    message?: string;
}