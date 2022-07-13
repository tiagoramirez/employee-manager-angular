import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionI } from '../models/position.interface';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class PositionsService {

    constructor(private dataService: DataService) { }

    getAll(): Observable<PositionI[]> {
        return this.dataService.getAllPositions();
    }

    addNew(position: PositionI): Observable<PositionI> {
        return this.dataService.addNewPosition(position);
    }

    getById(id: string): Observable<PositionI> {
        return this.dataService.getPositionById(id);
    }

    update(idToEdit: string, position: PositionI): Observable<PositionI> {
        return this.dataService.updatePosition(idToEdit, position);
    }

    deletePosition(id: string, position: PositionI): Observable<PositionI> {
        position.state = false;
        return this.dataService.updatePosition(id, position);
    }

    checkPosition(position: PositionI): number {
        if (position.name === '' || position.name === undefined || position.name === null) {
            return 1;
        }

        if(position.salary===undefined || position.salary===null){
            return 2;
        }

        if (position.salary <= 0) {
            return 3;
        }

        if (position.floor === undefined || position.floor === null) {
            return 4;
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
                return "No se ingreso salario.";
            
            case 3:
                return "El salario no puede ser menor o igual a 0.";
            
            case 4:
                return "No se ingreso el piso.";

            case 5:
                return "Error inesperado. Intentelo de nuevo.";
        }
        return "Error.";
    }
}