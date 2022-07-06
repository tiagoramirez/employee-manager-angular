import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
import { Position } from '../models/position.model';
import { PositionsService } from '../services/positions.service';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

    constructor(private employeeService: EmployeesService, private positionService: PositionsService, private router: Router) { }

    ngOnInit(): void {

        this.positions = this.positionService.getPositions();
    }

    showError: boolean = false;

    positions!: Position[]

    selectedIdPosition: number = -1;

    namesNewEmployee: string = "";
    surnamesNewEmployee: string = "";
    dniNewEmployee: number = 0;

    createEmployee() {        
        this.employeeService.addNewEmployee(this.namesNewEmployee, this.surnamesNewEmployee, this.dniNewEmployee, this.positionService.getPositionById(this.selectedIdPosition)) ? this.router.navigate(['']) : this.showError = true;
    }
}
