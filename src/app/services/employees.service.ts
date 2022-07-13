import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeI } from '../models/employee.interface';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    constructor(private dataService: DataService) { }

    getAll(): Observable<EmployeeI[]> {
        return this.dataService.getAllEmployees();
    }

    addNew(employee: EmployeeI): Observable<EmployeeI> {
        return this.dataService.addNewEmployee(employee);
    }

    getById(id: string): Observable<EmployeeI> {
        return this.dataService.getEmployeeById(id);
    }

    update(idToEdit: string, employee: EmployeeI) {
        return this.dataService.updateEmployee(idToEdit, employee);
    }

    delete(id: string, employee: EmployeeI) {
        employee.state = false;
        return this.dataService.updateEmployee(id, employee);
    }

    checkEmployee(employee: EmployeeI): number {
        if (employee.names === '' || employee.names === undefined || employee.names === null) {
            return 1;
        }

        if (employee.surnames === '' || employee.surnames === undefined || employee.surnames === null) {
            return 2;
        }

        if (employee.dni === undefined || employee.dni === null) {
            return 3;
        }

        if (employee.dni.toString().length != 8 || employee.dni <= 0) {
            return 4;
        }

        if (employee.positionId === undefined || employee.positionId === null) {
            return 5;
        }

        return 0;
    }

    getErrorMessage(errorNumber: number): string {
        switch (errorNumber) {
            case 0:
                return "";

            case 1:
                return "No se ingreso nombre.";

            case 2:
                return "No se ingreso apellido.";

            case 3:
                return "No se ingreso D.N.I.";

            case 4:
                return "D.N.I. incorrecto.";

            case 5:
                return "No se selecciono una posicion.";

            case 6:
                return "Error inesperado. Intentelo de nuevo.";
        }
        return "Error.";
    }
}
