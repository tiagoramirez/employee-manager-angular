import { Injectable } from '@angular/core';
import { Position } from '../models/position.model';

@Injectable({
    providedIn: 'root'
})
export class PositionsService {
    lastId: number = 2;

    private positions: Position[] = [//hardcoded position for testing reasons
        new Position(0, 'Jefe de jefes', 9999.99, 5),
        new Position(1, 'Jefe de programadores', 7999.99, 3),
        new Position(2, 'Programadores junior', 2300.99, 8),
    ];

    //return errorNumber. 0 means no error. 1 means no name error. 2 means salary <= 0 error.
    addNewPosition(name: string, salary: number, floor: number): number {
        if (name === '') {
            return 1;
        }
        if (salary <= 0) {
            return 2;
        }
        this.positions.push(new Position(this.lastId + 1, name, salary, floor));

        return 0;
    }

    getPositionById(id: number): Position {
        return this.positions[id];
    }

    getPositions(): Position[] {
        return this.positions.filter(x => x.state === true);
    }

    deletePoistion(id: number): number {
        try {
            this.positions[id].state = false;
            return 0;
        } catch (error) {
            return 3;
        }
    }

    //return errorNumber. 0 means no error. 1 means no name error. 2 means salary <= 0 error. 3 means Unexpected error
    editPosition(idToEdit: number, newName: string, newSalary: number, newFloor: number): number {

        if (newName == '') {
            return 1;
        }
        if (newSalary <= 0) {
            return 2;
        }

        try {
            this.positions[idToEdit] = { id: idToEdit, name: newName, salary: newSalary, floor: newFloor, state: true, creationDate: new Date() }
            return 0;
        } catch (error) {
            return 3;
        }
    }

    getErrorMessage(errorNumber: number): string {
        switch (errorNumber) {
            case 1:
                return "El nombre no puede estar vacio."

            case 2:
                return "El salario no puede ser menor o igual a 0."

            case 3:
                return "Error inesperado. Intentelo de nuevo."
        }
        return "Error."
    }
}