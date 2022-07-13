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
        let sub: Subscription = this.positionsService.getAll().subscribe(response => {
            this.cargando = false;
            if (response !== undefined && response !== null) {
                Object.entries(response).forEach(item => {
                    item[1].state ? this.positions.push({
                        id: item[0],
                        ...item[1]
                    }) : null;
                })
            }
            this.subsContainer.add(sub);
        });
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    positions: PositionI[] = [];

    cargando = true;

    subsContainer: SubscriptionContainer = new SubscriptionContainer();
}