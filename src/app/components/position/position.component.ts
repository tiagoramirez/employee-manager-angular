import { Component, Input } from '@angular/core';
import { PositionI } from '../../models/position.interface';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.css']
})
export class PositionComponent {
    @Input() position!: PositionI;
}
