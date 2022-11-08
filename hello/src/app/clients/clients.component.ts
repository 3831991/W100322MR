import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients.interface';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    clients: Client[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<Client[]>("http://localhost:3000/clients").subscribe(data => {
            this.clients = data;
        });
    }

}
