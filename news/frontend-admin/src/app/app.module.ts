import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        ArticlesComponent,
        ArticleBodyComponent,
        CategoriesComponent,
        HomeComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        HttpService,
        DatePipe,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
