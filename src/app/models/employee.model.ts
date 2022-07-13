import { PositionI } from "./position.interface";

export class Employee {
    constructor(id: number, names: string, surnames: string, dni: number, position: PositionI) {
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
    position: PositionI;
    state: boolean;
    creationDate: Date;

    toString(): string {
        return this.names + " " + this.surnames + " trabaja en el piso " + this.position.floor + " como " + this.position.name + " y gana " + this.position.salary;
    }
}