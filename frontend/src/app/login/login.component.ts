import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoggedin } from '../app.component';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl('', [
            Validators.required,
        ]),
    });

    send() {
        const sub = this.http.post<UserLoggedin>("http://localhost:3000/login", this.form.value, { withCredentials: true })
        .subscribe(data => {
            this.utility.user = data;
            this.utility.alert("ההתחברות בוצעה בהצלחה!");
            sub.unsubscribe();
            this.router.navigate(['']);
        });
    }

    constructor(private http: HttpClient, private utility: UtilityService, private router: Router) { }

    ngOnInit() {
    }

}
