import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesService } from './employees.service';

const appRoutes: Routes = [
    { path: '', component: EmployeesComponent },
    { path: 'aboutMe', component: AboutMeComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        NavBarComponent,
        FooterComponent,
        EmployeesComponent,
        EmployeeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [EmployeesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
