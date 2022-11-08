import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    name: string = "יוסי";
    phone: string;
    email: string;
    content: string;
    happiness: number = 50;
    fearLevel: number = 20;

    send() {
        this.utility.alert(`הטופס נשלח בהצלחה!`);

        console.log(`שם מלא: ${this.name}`);
        console.log(`טלפון: ${this.phone}`);
        console.log(`אימייל: ${this.email}`);
        console.log(`תוכן: ${this.content}`);
        console.log(`רמת שמחה: ${this.happiness}`);
        console.log(`רמת פחד: ${this.fearLevel}`);
    }

    constructor(public utility: UtilityService) { }

    ngOnInit() {
    }

}
