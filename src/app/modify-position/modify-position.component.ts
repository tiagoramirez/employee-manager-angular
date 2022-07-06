import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../models/position.model';
import { PositionsService } from '../services/positions.service';

@Component({
    selector: 'app-modify-position',
    templateUrl: './modify-position.component.html',
    styleUrls: ['./modify-position.component.css']
})
export class ModifyPositionComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private positionService: PositionsService) { }

    ngOnInit(): void {

        this.positionToModify = this.positionService.getPositionById(this.route.snapshot.params['id']);

        this.newName = this.positionToModify.name;
        this.newSalary = this.positionToModify.salary;
        this.newFloor = this.positionToModify.floor;

        this.action = this.route.snapshot.queryParams['action'];
    }


    positionToModify!: Position;

    action!: string;

    newName: string = "";
    newSalary: number = 0;
    newFloor: number = 0;

    showError: boolean = false;
    errorMessage: string = "";

    modifyPosition() {
        if (this.action === "delete") {
            const errorNumber = this.positionService.deletePoistion(this.positionToModify.id);
            if (errorNumber === 0) {
                this.router.navigate(['/positions'])
            }
            this.showError = true;
            this.errorMessage = this.positionService.getErrorMessage(errorNumber);
        }
        if (this.action === "edit") {
            const errorNumber = this.positionService.editPosition(this.positionToModify.id, this.newName, this.newSalary, this.newFloor);
            if (errorNumber === 0) {
                this.router.navigate(['/positions'])
            }
            this.showError = true;
            this.errorMessage = this.positionService.getErrorMessage(errorNumber);
        }
    }

}
