import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Article } from './articles.interface';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    articles: Article[] = [];

    edit(item: Article) {
        this.router.navigate(['article-body', item.id]);
    }

    remove(item: Article) {

    }

    constructor(private http: HttpService, private router: Router) { }

    ngOnInit() {
        const sub = this.http.get<Article[]>('articles').subscribe(data => {
            this.articles = data;
            sub.unsubscribe();
        });
    }

}
