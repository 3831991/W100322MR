import { Component, OnInit } from '@angular/core';
import { users } from './users.data';
import { User } from './users.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    searchVal: string;
    users = users;

    toggle(u: User) {
        const isActive = u.isActive;

        // סוגר את כולם
        this.users.forEach(x => x.isActive = false);

        u.isActive = !isActive;
    }

    constructor() { }

    ngOnInit() {
    }

}
