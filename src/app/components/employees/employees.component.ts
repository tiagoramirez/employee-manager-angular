import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { EmployeeI } from '../../models/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

    constructor(private employeesService: EmployeesService) { }

    ngOnInit(): void {
        let sub: Subscription = this.employeesService.getAll().subscribe(response => {
            this.cargando = false;
            if (response !== undefined && response !== null) {
                Object.entries(response).forEach(item => {
                    item[1].state ? this.employees.push({
                        id: item[0],
                        ...item[1]
                    }) : null;
                })
            }
            this.subsContainer.add(sub);
        });
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    employees: EmployeeI[] = [];

    cargando = true;

    subsContainer: SubscriptionContainer = new SubscriptionContainer();

}
