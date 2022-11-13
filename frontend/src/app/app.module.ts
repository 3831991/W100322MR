import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AlertComponent } from './alert/alert.component';
import { UtilityService } from './utility.service';
import { RangeComponent } from './range/range.component';
import { BrightnessComponent } from './brightness/brightness.component';
import { SearchPipe } from './search.pipe';
import { MyNumberPipe } from './my-number.pipe';
import { ClientsComponent } from './clients/clients.component';
import { SupportComponent } from './support/support.component';
import { SupportManageComponent } from './support-manage/support-manage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListComponent,
        StudentsComponent,
        UsersComponent,
        HomeComponent,
        ContactComponent,
        AlertComponent,
        RangeComponent,
        BrightnessComponent,
        SearchPipe,
        MyNumberPipe,
        ClientsComponent,
        SupportComponent,
        SupportManageComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        UtilityService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
