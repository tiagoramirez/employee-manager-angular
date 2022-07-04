import { Component, Input } from '@angular/core';
import { Position } from '../position.model';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.css']
})
export class PositionComponent {
    @Input() position!: Position;
}
