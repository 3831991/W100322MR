import { Routes } from "@angular/router";
import { ArticleBodyComponent } from "./article-body/article-body.component";
import { ArticlesComponent } from "./articles/articles.component";
import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'article-body', component: ArticleBodyComponent },
    { path: 'article-body/:id', component: ArticleBodyComponent },
    { path: 'categories', component: CategoriesComponent },
];