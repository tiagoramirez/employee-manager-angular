import { Component, OnInit } from '@angular/core';
import { EmployeeI } from '../../models/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

    // constructor(private employeesService: EmployeesService) { }

    // ngOnInit(): void {
    //     this.employees = this.employeesService.getEmployees();
    // }

    // employees!: EmployeeI[];
}
