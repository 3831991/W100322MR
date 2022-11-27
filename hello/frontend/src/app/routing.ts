import { Routes } from "@angular/router";
import { BrightnessComponent } from "./brightness/brightness.component";
import { ClientsComponent } from "./clients/clients.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SupportManageComponent } from "./support-manage/support-manage.component";
import { SupportComponent } from "./support/support.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'brightness', component: BrightnessComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'support', component: SupportComponent },
    { path: 'support-manage/:status', component: SupportManageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
];