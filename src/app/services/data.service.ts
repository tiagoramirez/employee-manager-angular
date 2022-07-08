import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Position } from "../models/position.model";


@Injectable()
export class DataService {

    constructor(private htppClient: HttpClient) { }

    savePositions(positions: Position[]) {
        this.htppClient.put('https://gestion-empleados-77f08-default-rtdb.firebaseio.com/positions.json', positions).subscribe(
            response => console.log("Se guardaron las posiciones " + response),
            error => console.log("Error al guardar las posiciones " + error)
        );
    }
}
