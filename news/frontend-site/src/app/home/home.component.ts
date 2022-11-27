import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Article } from './home.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    data: Article[] = [];

    constructor(private http: HttpService) { }

    ngOnInit() {
        const sub = this.http.get<Article[]>('articles').subscribe(data => {
            this.data = data;
            sub.unsubscribe();
        });
    }

}
