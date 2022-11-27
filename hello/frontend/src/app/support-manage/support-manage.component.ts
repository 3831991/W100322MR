import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../http.service';
import { Support } from '../support/support.interface';

@Component({
    selector: 'app-support-manage',
    templateUrl: './support-manage.component.html',
    styleUrls: ['./support-manage.component.css', '../clients/clients.component.css']
})
export class SupportManageComponent implements OnInit {
    support: Support[] = [];
    isStatusDone: boolean;
    sub: Subscription;

    remove(item: Support) {
        if (!confirm("האם למחוק את הפנייה?")) {
            return;
        }

        const sub = this.http.delete<void>(`support/${item.id}`).subscribe(() => {
            const i = this.support.findIndex(x => x.id == item.id);
            this.support.splice(i, 1);
            sub.unsubscribe();
        });
    }

    complete(item: Support) {
        if (!confirm("האם לסגור את הפנייה?")) {
            return;
        }

        const sub = this.http.put<void>(`support/complete`, item).subscribe(() => {
            const i = this.support.findIndex(x => x.id == item.id);
            this.support.splice(i, 1);
            sub.unsubscribe();
        });
    }

    undo(item: Support) {
        if (!confirm("האם לפתוח את הפנייה בשנית?")) {
            return;
        }

        const sub = this.http.put<void>(`support/undo`, item).subscribe(() => {
            const i = this.support.findIndex(x => x.id == item.id);
            this.support.splice(i, 1);
            sub.unsubscribe();
        });
    }

    constructor(private http: HttpService, private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(ev => {
            if (ev['status'] === 'completed') {
                this.isStatusDone = true;

                const sub = this.http.get<Support[]>("support/completed").subscribe(data => {
                    this.support = data;
                    sub.unsubscribe();
                });
            } else {
                this.isStatusDone = false;

                const sub = this.http.get<Support[]>("support/opened").subscribe(data => {
                    this.support = data;
                    sub.unsubscribe();
                });
            }
        });
    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
