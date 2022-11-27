import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { UtilityService } from './utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    logout() {
        const sub = this.http.get<void>("logout").subscribe(() => {
            this.utility.user = undefined;
            sub.unsubscribe();
            this.router.navigate(['']);
        });
    }

    constructor(public utility: UtilityService, private http: HttpService, private router: Router) {}

    ngOnInit() {
        this.utility.setGlobalStyling();

        const sub = this.http.get<UserStatus>("login-status").subscribe(data => {
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