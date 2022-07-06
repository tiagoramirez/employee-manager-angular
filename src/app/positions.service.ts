import { Injectable, OnInit } from '@angular/core';
import { Position } from './position.model';

@Injectable({
    providedIn: 'root'
})
export class PositionsService {

    lastId: number = 2;

    positions: Position[] = [//hardcoded position for testing reasons
        new Position(0, 'Jefe de jefes', 9999.99, 5),
        new Position(1, 'Jefe de programadores', 7999.99, 3),
        new Position(2, 'Programadores junior', 2300.99, 8),
    ];

    addNewPosition(name: string, salary: number, floor: number): boolean {
        if (name !== '' && salary > 0) {
            this.positions.push(new Position(this.lastId + 1, name, salary, floor));
            this.lastId++;
            return true;
        }
        return false;
    }
}
