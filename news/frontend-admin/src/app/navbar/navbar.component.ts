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
        { route: '/', title: 'בית', icon: 'home' },
        { route: '/articles', title: 'כתבות', icon: 'list' },
        { route: '/categories', title: 'קטגוריות', icon: 'server' },
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
