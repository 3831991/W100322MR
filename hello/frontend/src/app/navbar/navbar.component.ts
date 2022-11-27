import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UtilityService } from '../utility.service';
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
        { route: '/', title: 'בית', icon: 'home' },
        { route: '/list', title: 'רשימה', icon: 'list' },
        { route: '/gallery', title: 'גלרייה', icon: 'image' },
        { route: '/users', title: 'משתמשים', icon: 'users' },
        { route: '/contact', title: 'צור קשר', icon: 'envelope' },
        { route: '/brightness', title: 'נגישות', icon: 'wheelchair' },
        { route: '/clients', title: 'לקוחות', icon: 'users' },
        { route: '/support', title: 'שירות לקוחות', icon: 'phone' },
        { route: '/support-manage/opened', title: 'פניות פתוחות', isConnected: true, icon: 'american-sign-language-interpreting' },
        { route: '/support-manage/completed', title: 'פניות סגורות', isConnected: true, icon: 'circle' },
    ];

    constructor(private router: Router, public utility: UtilityService) {

        this.router.events.subscribe(ev => {
            if (ev instanceof NavigationStart) {
                this.active = ev.url;
            }
        });

    }

    ngOnInit() {
    }

}
