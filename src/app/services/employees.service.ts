import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Position } from '../models/position.model';
import { PositionsService } from './positions.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    constructor(private positionService: PositionsService) { }

    lastId: number = 0;

    employees: Employee[] = [//hardcoded employee for testing reasons
        new Employee(0, "Tiago A.", "Ramirez M.", 11222333, this.positionService.getPositions()[0])
    ];

    addNewEmployee(names: string, surnames: string, dni: number, position: Position): boolean {
        if (names !== '' && surnames !== '' && dni.toString().length === 8) {
            this.employees.push(new Employee(this.lastId + 1, names, surnames, dni, position));
            this.lastId++;
            return true;
        }
        return false;
    }
}
