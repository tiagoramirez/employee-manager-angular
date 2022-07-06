export class Position {
    constructor(id: number, name: string, salary: number, floor: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.floor = floor;
        this.state = true;
        this.creationDate = new Date();        
    }
    
    id: number;
    name: string;
    salary: number;
    floor: number;
    state: boolean;
    creationDate: Date;

    toString() {
        return `${this.name} tiene salario de $${this.salary} y trabaja en el piso ${this.floor}`;
    }
}