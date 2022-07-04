import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { Position } from './position.model';
import { PositionsService } from './positions.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    constructor(private positionService: PositionsService) { }

    lastId: number = 0;

    employees: Employee[] = [//hardcoded employee for testing reasons
        new Employee(0, "Tiago A.", "Ramirez M.", 11222333, this.positionService.positions[0])
    ];

    addNewEmployee(names: string, surnames: string, dni: number, positionId: number): boolean {
        if (names !== '' && surnames !== '' && dni.toString().length === 8) {
            const positionNewEmployee = this.positionService.positions.find(x => x.id === positionId);
            if (positionNewEmployee !== undefined) {
                this.employees.push(new Employee(this.lastId + 1, names, surnames, dni, positionNewEmployee));
                this.lastId++;
                return true;
            }
        }
        return false;
    }
}
