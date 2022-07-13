import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { PositionsService } from '../../services/positions.service';

@Component({
    selector: 'app-create-position',
    templateUrl: './create-position.component.html',
    styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent implements OnDestroy {

    constructor(private positionsService: PositionsService, private router: Router) { }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    subsContainer: SubscriptionContainer = new SubscriptionContainer();

    nameNewPosition: string = "";
    salaryNewPosition!: number;
    floorNewPosition!: number;

    showError: boolean = false;
    errorMessage: string = "";

    createPosition() {
        const newPosition = {
            name: this.nameNewPosition,
            salary: this.salaryNewPosition,
            floor: this.floorNewPosition,
            state: true,
            creationDate: new Date()
        }

        const errorNumber = this.positionsService.checkPosition(newPosition);

        if (errorNumber === 0) {
            let sub: Subscription = this.positionsService.addNew(newPosition).subscribe(res => {
                console.log(res);
                this.router.navigate(['/positions']);
            });
            this.subsContainer.add(sub);
        }
        this.showError = true;
        this.errorMessage = this.positionsService.getErrorMessage(errorNumber);
    }

}
