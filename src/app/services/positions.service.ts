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

    deletePoistion(id: number): boolean {
        try {
            this.positions[id].state = false;
            return true;
        } catch (error) {
            return false;
        }
    }

    editPosition(id: number, newName: string, newSalary: number, newFloor: number): boolean {
        try {
            this.positions[id].name = newName;
            this.positions[id].salary = newSalary;
            this.positions[id].floor = newFloor;
            this.positions[id].creationDate = new Date();
            return true;
        } catch (error) {
            return false;
        }
    }
}
