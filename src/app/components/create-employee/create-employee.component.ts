import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { PositionI } from '../../models/position.interface';
import { PositionsService } from '../../services/positions.service';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { EmployeeI } from 'src/app/models/employee.interface';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

    constructor(private employeesService: EmployeesService, private positionsService: PositionsService, private router: Router) { }

    ngOnInit(): void {

        let subPositions: Subscription = this.positionsService.getAll().subscribe(response => {
            Object.entries(response).forEach(item => {
                item[1].state ? this.positions.push({
                    id: item[0],
                    ...item[1]
                }) : null;
            })
            this.subsContainer.add(subPositions);
        });
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    positions: PositionI[] = [];

    subsContainer: SubscriptionContainer = new SubscriptionContainer();

    newNames: string;
    newSurnames: string;
    newDni: number;
    selectedIdPosition: string;

    showError: boolean = false;
    errorMessage: string = "";

    createEmployee() {

        const newEmployee: EmployeeI = {
            names: this.newNames,
            surnames: this.newSurnames,
            dni: this.newDni,
            positionId: this.selectedIdPosition,
            state: true,
            creationDate: new Date()
        }

        const errorNumber = this.employeesService.checkEmployee(newEmployee);

        if (errorNumber === 0) {
            let sub: Subscription = this.employeesService.addNew(newEmployee).subscribe(res => {
                this.subsContainer.add(sub);
                this.router.navigate(['']);
            });
        }
        this.showError = true;
        this.errorMessage = this.employeesService.getErrorMessage(errorNumber);
    }
}
