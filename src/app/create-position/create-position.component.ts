import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PositionsService } from '../services/positions.service';

@Component({
    selector: 'app-create-position',
    templateUrl: './create-position.component.html',
    styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent {

    constructor(private positionsService: PositionsService, private router: Router) { }

    nameNewPosition: string = "";
    salaryNewPosition!: number;
    floorNewPosition!: number;

    showError: boolean = false;

    createPosition() {
        this.positionsService.addNewPosition(this.nameNewPosition, this.salaryNewPosition, this.floorNewPosition) ? this.router.navigate(['positions']) : this.showError = true;
    }

}
