import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    alternativeImage: string | ArrayBuffer;
    alternativeImageName: string;

    @ViewChild('imageInput')
    inputElem: ElementRef<HTMLInputElement>;

    update() {
        for (const k in this.form.value) {
            this.article[k] = this.form.value[k];
        }

        if (this.alternativeImage) {
            this.article.image = this.alternativeImage;
            this.article.imageName = this.alternativeImageName;
        }

        const sub = this.http.put<void>("article", this.article).subscribe(() => {
            sub.unsubscribe();
            this.router.navigate(['articles']);
        }, (err) => {
            alert("חביבי, הייתה שגיאה!")
        });
    }

    add() {
        const data = this.form.value;

        if (this.alternativeImage) {
            data.image = this.alternativeImage;
            data.imageName = this.alternativeImageName;
        }

        if (!data.publishTime) {
            data.publishTime = this.date.transform(new Date(), 'yyyy-MM-dd');
        }

        const sub = this.http.post<Article>("article", data).subscribe(item => {
            sub.unsubscribe();
            this.router.navigate(['articles']);
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

    selectImage() {
        this.inputElem.nativeElement.click();
    }

    imageChange() {
        const files = this.inputElem.nativeElement.files;

        if (files.length) {
            const reader = new FileReader();

            reader.onload = (ev) => {
                this.alternativeImage = ev.target.result;
                this.alternativeImageName = files[0].name;
            };

            reader.readAsDataURL(files[0]);
        }
    }

    constructor(private http: HttpService, private route: ActivatedRoute, private date: DatePipe, private router: Router) {
        this.sub = this.route.params.subscribe(data => {
            const id = data['id'];

            if (id) {
                const sub = this.http.get<Article>(`article/${id}`).subscribe(data => {
                    this.article = data;
                    this.buildForm(this.article);
                    sub.unsubscribe();
                });
            } else {
                this.article = {
                    id: 0,
                    createdTime: '',
                    userId: 0,
                    title: '',
                    subTitle: '',
                    body: '',
                    publishTime: '',
                    reporterId: 0,
                    imgId: 0,
                    categoryId: 0,
                    isDeleted: false,
                };

                this.buildForm(this.article);
            }
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
