import { Routes } from "@angular/router";
import { BrightnessComponent } from "./brightness/brightness.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'brightness', component: BrightnessComponent },
];