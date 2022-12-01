import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Article } from './articles.interface';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    counter = 0;
    timeout: any;

    @HostListener("window:keyup", ["$event"])
    trippleClick(ev: KeyboardEvent) {
        clearTimeout(this.timeout);
        
        if (ev.code == 'KeyN') {
            this.counter++;

            if (this.counter >= 3) {
                this.router.navigate(['article-body']);
            }

            this.timeout = setTimeout(() => {
                this.counter = 0;
            }, 500);
        } else {
            this.counter = 0;
        }
    }

    articles: Article[] = [];

    edit(item: Article) {
        this.router.navigate(['article-body', item.id]);
    }

    remove(item: Article) {
        const sub = this.http.delete<void>(`article/${item.id}`).subscribe(() => {
            const i = this.articles.findIndex(x => x.id == item.id);
            this.articles.splice(i, 1);

            sub.unsubscribe();
        });
    }

    constructor(private http: HttpService, private router: Router) { }

    ngOnInit() {
        const sub = this.http.get<Article[]>('articles').subscribe(data => {
            this.articles = data;
            sub.unsubscribe();
        });
    }

}
