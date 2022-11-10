import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Menu } from './navbar.interface';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    firstName: string;
    active: string;

    menu: Menu[] = [
        { route: '/', title: 'בית' },
        { route: '/list', title: 'רשימה' },
        { route: '/users', title: 'משתמשים' },
        { route: '/contact', title: 'צור קשר' },
        { route: '/brightness', title: 'נגישות' },
        { route: '/clients', title: 'לקוחות' },
        { route: '/support', title: 'שירות לקוחות' },
        { route: '/support-manage/opened', title: 'פניות פתוחות' },
        { route: '/support-manage/completed', title: 'פניות סגורות' },
    ];

    constructor(private router: Router) {

        this.router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                this.active = ev.url;
                
            }
        });

    }

    ngOnInit() {
    }

}
