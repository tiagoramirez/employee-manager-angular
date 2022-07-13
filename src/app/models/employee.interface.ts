import { PositionI } from "./position.interface";

export class EmployeeI {
    id?: string;
    names: string;
    surnames: string;
    dni: number;
    positionId: string;
    state: boolean;
    creationDate: Date;
}