import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesService } from './services/employees.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { PositionsService } from './services/positions.service';
import { PositionsComponent } from './positions/positions.component';
import { PositionComponent } from './position/position.component';
import { CreatePositionComponent } from './create-position/create-position.component';
import { FormsModule } from '@angular/forms';
import { ModifyPositionComponent } from './modify-position/modify-position.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', component: EmployeesComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'positions', component: PositionsComponent },
    { path: 'createPosition', component: CreatePositionComponent },
    { path: 'modifyPosition/:id', component: ModifyPositionComponent },
    { path: 'createEmployee', component: CreateEmployeeComponent },
    { path: 'modifyEmployee/:id', component: ModifyEmployeeComponent },
    { path: '**', component: NotFoundErrorComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        NavBarComponent,
        FooterComponent,
        EmployeesComponent,
        EmployeeComponent,
        CreateEmployeeComponent,
        PositionsComponent,
        PositionComponent,
        CreatePositionComponent,
        ModifyPositionComponent,
        ModifyEmployeeComponent,
        NotFoundErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
    ],
    providers: [EmployeesService, PositionsService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
