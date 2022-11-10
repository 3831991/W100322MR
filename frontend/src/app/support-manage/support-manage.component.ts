import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Support } from '../support/support.interface';

@Component({
    selector: 'app-support-manage',
    templateUrl: './support-manage.component.html',
    styleUrls: ['./support-manage.component.css', '../clients/clients.component.css']
})
export class SupportManageComponent implements OnInit {
    support: Support[] = [];

    remove(item: Support) {
        if (!confirm("האם למחוק את הפנייה?")) {
            return;
        }

        const sub = this.http.delete<void>(`http://localhost:3000/support/${item.id}`).subscribe(() => {
            const i = this.support.findIndex(x => x.id == item.id);
            this.support.splice(i, 1);
            sub.unsubscribe();
        });
    }

    complete(item: Support) {
        if (!confirm("האם לסגור את הפנייה?")) {
            return;
        }

        const sub = this.http.put<void>(`http://localhost:3000/support/complete`, item).subscribe(() => {
            const i = this.support.findIndex(x => x.id == item.id);
            this.support.splice(i, 1);
            sub.unsubscribe();
        });
    }

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(ev => {
            if (ev['status'] === 'completed') {
                const sub = this.http.get<Support[]>("http://localhost:3000/support/completed").subscribe(data => {
                    this.support = data;
                    sub.unsubscribe();
                });
            } else {
                const sub = this.http.get<Support[]>("http://localhost:3000/support/opened").subscribe(data => {
                    this.support = data;
                    sub.unsubscribe();
                });
            }
        });
    }
}
