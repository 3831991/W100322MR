import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
    @Input()
    min: number = 20;

    @Input()
    max: number = 60;

    @Input()
    value: string | number = 49;

    @Output()
    valueChange = new EventEmitter;

    change() {
        this.valueChange.emit(this.value);
    }

    constructor() { }

    ngOnInit() {
    }

}
