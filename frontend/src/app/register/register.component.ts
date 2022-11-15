import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../users/users.interface';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: FormGroup = new FormGroup({
        fullName: new FormControl('', [
            Validators.required,
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl('', [
            Validators.required,
        ]),
    });

    send() {
        const sub = this.http.post<User>("http://localhost:3000/register", this.form.value).subscribe(() => {
            this.utility.alert("המשתמש נוסף בהצלחה!");
            sub.unsubscribe();
            this.router.navigate(['login']);
        });
    }

    constructor(private http: HttpClient, private utility: UtilityService, private router: Router) { }

    ngOnInit() {
    }

}
