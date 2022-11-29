import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../articles/articles.interface';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-article-body',
    templateUrl: './article-body.component.html',
    styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit {
    sub: Subscription;
    article: Article;
    form: FormGroup;

    send() {
        for (const k in this.form.value) {
            this.article[k] = this.form.value[k];
        }

        const sub = this.http.put<void>("article", this.article).subscribe(() => {
            sub.unsubscribe();
            this.router.navigate(['articles']);
        }, (err) => {
            alert("חביבי, הייתה שגיאה!")
        });
    }
    
    buildForm(item: Article) {
        this.form = new FormGroup({
            title: new FormControl(item.title, [
                Validators.required,
            ]),
            subTitle: new FormControl(item.subTitle, [
                Validators.required,
            ]),
            body: new FormControl(item.body, [
                Validators.required,
            ]),
            imgId: new FormControl(item.imgId, [
                Validators.required,
            ]),
            publishTime: new FormControl(this.date.transform(item.publishTime, 'yyyy-MM-dd'), [
                Validators.required,
            ]),
            reporterId: new FormControl(item.reporterId, [
                Validators.required,
            ]),
            categoryId: new FormControl(item.categoryId, [
                Validators.required,
            ]),
        });
    }

    constructor(private http: HttpService, private route: ActivatedRoute, private date: DatePipe, private router: Router) {
        this.sub = this.route.params.subscribe(data => {
            const id = data['id'];

            const sub = this.http.get<Article>(`article/${id}`).subscribe(data => {
                this.article = data;
                this.buildForm(this.article);
                sub.unsubscribe();
            });
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
