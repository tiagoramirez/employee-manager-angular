import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Position } from '../models/position.model';
import { PositionsService } from './positions.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    constructor(private positionService: PositionsService) { }

    private lastId: number = 0;

    private employees: Employee[] = [//hardcoded employee for testing reasons
        new Employee(0, "Tiago A.", "Ramirez M.", 11222333, this.positionService.getPositions()[0])
    ];

    addNewEmployee(names: string, surnames: string, dni: number, position: Position): number {
        if (names === undefined || names === '') {
            return 1;
        }
        if (surnames === undefined || surnames === '') {
            return 2;
        }
        if (dni === undefined || dni.toString().length !== 8) {
            return 3;
        }
        if (position === undefined) {
            return 5;
        }

        this.employees.push(new Employee(this.lastId + 1, names, surnames, dni, position));
        this.lastId++;
        return 0;
    }

    getEmployeeById(id: number): Employee {
        return this.employees[id];
    }

    getEmployees(): Employee[] {
        return this.employees.filter(emp => emp.state === true);
    }

    deletePoistion(id: number): number {
        try {
            this.employees[id].state = false;
            return 0;
        } catch (error) {
            return 4;
        }
    }

    editPosition(idToEdit: number, newNames: string, newSurnames: string, newDni: number, newPosition: Position): number {

        if (newNames == '') {
            return 1;
        }

        try {
            this.employees[idToEdit] = { id: idToEdit, names: newNames, surnames: newSurnames, dni: newDni, position: newPosition, state: true, creationDate: new Date() }
            return 0;
        } catch (error) {
            return 3;
        }
    }

    getErrorMessage(errorNumber: number): string {
        switch (errorNumber) {
            case 1:
                return "El nombre no puede estar vacio.";

            case 2:
                return "El apellido no puede estar vacio.";

            case 3:
                return "D.N.I. incorrecto.";

            case 4:
                return "Error inesperado. Intentelo de nuevo.";

            case 5:
                return "No se selecciono una posicion.";
        }
        return "Error.";
    }
}
