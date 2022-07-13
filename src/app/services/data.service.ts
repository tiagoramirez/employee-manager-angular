import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PositionI } from "../models/position.interface";


@Injectable()
export class DataService {

    constructor(private htppClient: HttpClient) { }

    private urlApi = environment.apiUrl;

    getAllPositions(): Observable<PositionI[]> {
        return this.htppClient.get<PositionI[]>(this.urlApi + '/positions.json');
    }

    getPositionById(id: string): Observable<PositionI> {
        return this.htppClient.get<PositionI>(this.urlApi + '/positions/' + id + '.json');
    }

    addNewPosition(position: PositionI): Observable<PositionI> {
        return this.htppClient.post<PositionI>(this.urlApi + '/positions.json', position);
    }

    updatePosition(id: string, position: PositionI): Observable<PositionI> {
        return this.htppClient.put<PositionI>(this.urlApi + '/positions/' + id + '.json', position);
    }
}
