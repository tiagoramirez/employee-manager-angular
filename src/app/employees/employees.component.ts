import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    constructor(private employeesService: EmployeesService) { }

    ngOnInit(): void {
        this.employees = this.employeesService.employees;
        console.log(this.employees);
        
    }

    employees!: Employee[];
}
