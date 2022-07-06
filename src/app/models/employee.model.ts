import { Position } from "./position.model";

export class Employee {
    constructor(id: number, names: string, surnames: string, dni: number, position: Position) {
        this.id = id;
        this.names = names;
        this.surnames = surnames;
        this.dni = dni;
        this.position = position;
        this.state = true;
        this.creationDate = new Date();
    }

    id: number;
    names: string;
    surnames: string;
    dni: number;
    position: Position;
    state: boolean;
    creationDate: Date;

    toString(): string {
        return this.names + " " + this.surnames + " trabaja en el piso " + this.position.floor + " como " + this.position.name + " y gana " + this.position.salary;
    }
}