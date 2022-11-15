import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: UserLoggedin;

    constructor(private utility: UtilityService, private http: HttpClient) {}

    ngOnInit() {
        this.utility.setGlobalStyling();

        const sub = this.http.get<UserStatus>("http://localhost:3000/login-status", { withCredentials: true }).subscribe(data => {
            if (data.status === 'error') {
                console.log(data.message);
            } else if (data.status === 'loggedin') {
                this.user = data.user;
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
    user: UserLoggedin;
    message?: string;
}