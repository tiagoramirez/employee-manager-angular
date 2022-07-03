import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Position } from './position.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    lastIndex: number = 0;

    employees: Employee[] = [
        new Employee(0, "Tiago A.", "Ramirez M.", new Position("Jefe de jefes", 9999.99, 5))
    ]

    addNewEmployee(names: string, surnames: string, position: Position): boolean {
        if (names !== '' && surnames !== '') {
            this.employees.push(new Employee(this.lastIndex + 1, names, surnames, position));
            this.lastIndex++;
            return true;
        }
        return false;
    }
}
