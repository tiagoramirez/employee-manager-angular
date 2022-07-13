import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { PositionI } from '../../models/position.interface';
import { PositionsService } from '../../services/positions.service';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

    // constructor(private employeeService: EmployeesService, private positionService: PositionsService, private router: Router) { }

    // ngOnInit(): void {

    //     this.positions = this.positionService.getPositions();
    // }

    // positions!: PositionI[]

    // selectedIdPosition!: number;
    // namesNewEmployee!: string;
    // surnamesNewEmployee!: string;
    // dniNewEmployee!: number;

    // showError: boolean = false;
    // errorMessage: string = "";

    // createEmployee() {
    //     const errorNumber = this.employeeService.addNewEmployee(this.namesNewEmployee, this.surnamesNewEmployee, this.dniNewEmployee, this.positionService.getPositionById(this.selectedIdPosition));
    //     if (errorNumber === 0) {
    //         this.router.navigate(['']);
    //     }
    //     this.showError = true;
    //     this.errorMessage = this.employeeService.getErrorMessage(errorNumber);
    // }
}
