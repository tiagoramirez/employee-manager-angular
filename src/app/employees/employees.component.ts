import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    constructor(private employeesService: EmployeesService) { }

    ngOnInit(): void {
        this.employees = this.employeesService.getEmployees();
    }

    employees!: Employee[];
}
