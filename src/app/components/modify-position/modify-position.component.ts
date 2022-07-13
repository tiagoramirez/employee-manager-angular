import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { PositionI } from '../../models/position.interface';
import { PositionsService } from '../../services/positions.service';

@Component({
    selector: 'app-modify-position',
    templateUrl: './modify-position.component.html',
    styleUrls: ['./modify-position.component.css']
})
export class ModifyPositionComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute, private router: Router, private positionService: PositionsService) { }

    ngOnInit(): void {

        let sub: Subscription = this.positionService.getById(this.route.snapshot.params['id']).subscribe(response => this.positionToModify = response);
        this.subsContainer.add(sub);
        this.action = this.route.snapshot.queryParams['action'];
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    subsContainer: SubscriptionContainer = new SubscriptionContainer();

    positionToModify!: PositionI;

    action!: string;

    showError: boolean = false;
    errorMessage: string = "";

    modifyPosition() {
        // if (this.action === "delete") {
        //     const errorNumber = this.positionService.deletePosition(this.positionToModify.id);
        //     if (errorNumber === 0) {
        //         this.router.navigate(['/positions'])
        //     }
        //     this.showError = true;
        //     this.errorMessage = this.positionService.getErrorMessage(errorNumber);
        // }
        if (this.action === "edit") {
            const errorNumber = this.positionService.checkPosition(this.positionToModify);

            if (errorNumber === 0) {
                let sub: Subscription = this.positionService.update(this.positionToModify.id, this.positionToModify).subscribe();
                this.subsContainer.add(sub);
                this.router.navigate(['/positions'])
            }
            this.showError = true;
            this.errorMessage = this.positionService.getErrorMessage(errorNumber);
        }
    }

}
