import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

    form: FormGroup = new FormGroup({
        fullName: new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30),
        ]),
        phone: new FormControl('', [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(15),
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        content: new FormControl('', [
            Validators.required,
            Validators.maxLength(250),
        ]),
    });

    send() {
        const sub = this.http.post<void>("support", this.form.value).subscribe(() => {
            this.utility.alert("הטופס נשלח בהצלחה!");
            sub.unsubscribe();
            this.router.navigate(['support-manage', 'opened']);
        });
    }

    constructor(private http: HttpService, private utility: UtilityService, private router: Router) { }

    ngOnInit() {
        console.log(this.form)
    }

}
