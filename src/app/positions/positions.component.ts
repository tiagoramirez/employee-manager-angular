import { Component, OnInit } from '@angular/core';
import { Position } from '../position.model';
import { PositionsService } from '../positions.service';

@Component({
    selector: 'app-positions',
    templateUrl: './positions.component.html',
    styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

    constructor(private positionsService: PositionsService) { }

    ngOnInit(): void {
        this.positions = this.positionsService.getPositions();
    }

    positions!: Position[];

}
