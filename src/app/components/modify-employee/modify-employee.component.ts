import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { EmployeeI } from '../../models/employee.interface';
import { PositionI } from '../../models/position.interface';
import { EmployeesService } from '../../services/employees.service';
import { PositionsService } from '../../services/positions.service';

@Component({
    selector: 'app-modify-employee',
    templateUrl: './modify-employee.component.html',
    styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute, private router: Router, private employeesService: EmployeesService, private positionService: PositionsService) { }
    ngOnInit(): void {
        this.idToModify = this.route.snapshot.params['id'];

        let subEmployees: Subscription = this.employeesService.getById(this.idToModify).subscribe(response => {
            this.employeeToModify = response;
            this.subsContainer.add(subEmployees);
        });

        let subPositions: Subscription = this.positionService.getAll().subscribe(response => {
            Object.entries(response).forEach(item => {
                item[1].state ? this.positionsToSelect.push({
                    id: item[0],
                    ...item[1]
                }) : null;
            })
            this.subsContainer.add(subPositions);
        });

        this.action = this.route.snapshot.queryParams['action'];
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    subsContainer: SubscriptionContainer = new SubscriptionContainer();

    idToModify: string;

    employeeToModify: EmployeeI = {
        names: "Cargando...",
        surnames: "Cargando...",
        dni: 0,
        positionId: null,
        state: true,
        creationDate: null,
    };

    positionsToSelect: PositionI[] = [];

    action: string;


    showError: boolean = false;
    errorMessage: string = "";

    modifyEmployee() {
        const errorNumber = this.employeesService.checkEmployee(this.employeeToModify);
        if (this.action === "delete" && errorNumber === 0) {
            let sub: Subscription = this.employeesService.delete(this.idToModify, this.employeeToModify).subscribe(res => {
                this.subsContainer.add(sub);
                this.router.navigate([''])
            });
        }
        if (this.action === "edit" && errorNumber === 0) {
            let sub: Subscription = this.employeesService.update(this.idToModify, this.employeeToModify).subscribe(res => {
                this.subsContainer.add(sub);
                this.router.navigate([''])
            });

        }
        this.showError = true;
        this.errorMessage = this.employeesService.getErrorMessage(errorNumber);
    }
}