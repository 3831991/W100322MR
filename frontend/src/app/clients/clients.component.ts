import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients.interface';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    searchVal: string;
    clients: Client[] = [];
    newClient: Client = {
        id: null,
        firstName: '',
        lastName: '',
        time: '',
        birthday: '',
        phone: '',
        email: '',
        city: '',
    };

    remove(client: Client) {
        if (!confirm(`האם למחוק את ${client.firstName}?`)) {
            return;
        }

        const sub = this.http.delete<void>(`http://localhost:3000/clients/${client.id}`).subscribe(() => {
            const i = this.clients.findIndex(x => x.id === client.id);
            this.clients.splice(i, 1);
            sub.unsubscribe();
        });
    }

    isValid() {
        return Boolean(
            this.newClient.firstName &&
            this.newClient.lastName &&
            this.newClient.city &&
            this.newClient.email &&
            this.newClient.phone
        );
    }

    add() {
        if (!this.isValid()) {
            return;
        }

        const sub = this.http.post<Client>("http://localhost:3000/clients", this.newClient).subscribe(data => {
            this.clients.unshift(data);

            this.newClient = {
                id: null,
                firstName: '',
                lastName: '',
                time: '',
                birthday: '',
                phone: '',
                email: '',
                city: '',
            };

            sub.unsubscribe();
        });
    }

    update(client: Client) {
        const sub = this.http.put<void>("http://localhost:3000/clients", client).subscribe(() => {
            client.isEditState = false;
            sub.unsubscribe();
        });
    }

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const sub = this.http.get<Client[]>("http://localhost:3000/clients").subscribe(data => {
            this.clients = data;
            sub.unsubscribe();
        });
    }

}
