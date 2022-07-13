import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { PositionI } from '../../models/position.interface';
import { PositionsService } from '../../services/positions.service';

@Component({
    selector: 'app-positions',
    templateUrl: './positions.component.html',
    styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit, OnDestroy {

    constructor(private positionsService: PositionsService) { }

    ngOnInit(): void {
        let sub: Subscription = this.positionsService.getAll().subscribe(response => console.log(response));
        this.subsContainer.add(sub);
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    positions: PositionI[] = [];

    subsContainer: SubscriptionContainer = new SubscriptionContainer();


}
