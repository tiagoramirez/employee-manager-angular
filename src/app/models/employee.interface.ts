import { PositionI } from "./position.interface";

export class EmployeeI {
    id: number;
    names: string;
    surnames: string;
    dni: number;
    position: PositionI;
    state: boolean;
    creationDate: Date;
}