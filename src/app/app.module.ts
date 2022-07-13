import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesService } from './services/employees.service';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { PositionsService } from './services/positions.service';
import { PositionsComponent } from './components/positions/positions.component';
import { PositionComponent } from './components/position/position.component';
import { CreatePositionComponent } from './components/create-position/create-position.component';
import { FormsModule } from '@angular/forms';
import { ModifyPositionComponent } from './components/modify-position/modify-position.component';
import { ModifyEmployeeComponent } from './components/modify-employee/modify-employee.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: 'positions', component: PositionsComponent },
    { path: '', component: EmployeesComponent },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'createPosition', component: CreatePositionComponent },
    { path: 'modifyPosition/:id', component: ModifyPositionComponent },
    { path: 'createEmployee', component: CreateEmployeeComponent },
    { path: 'modifyEmployee/:id', component: ModifyEmployeeComponent },
    { path: '**', component: NotFoundErrorComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        PositionsComponent,
        PositionComponent,
        NavBarComponent,
        FooterComponent,
        AboutMeComponent,
        EmployeesComponent,
        EmployeeComponent,
        CreateEmployeeComponent,
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
