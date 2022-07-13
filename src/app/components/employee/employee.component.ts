import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscriptionContainer } from 'src/app/helpers/subscriptionContainer';
import { PositionsService } from 'src/app/services/positions.service';
import { EmployeeI } from '../../models/employee.interface';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

    constructor(private positionsService: PositionsService) { }

    ngOnInit(): void {
        let sub: Subscription = this.positionsService.getById(this.employee.positionId).subscribe(response => {
            this.positionName = response.name;
            this.isPositionActive = response.state;
        });
        this.subsContainer.add(sub);
    }

    ngOnDestroy(): void {
        this.subsContainer.unsubscribeAll();
    }

    subsContainer: SubscriptionContainer = new SubscriptionContainer();

    @Input() employee: EmployeeI;
    positionName: string = "Cargando...";
    isPositionActive: boolean = true;
}
