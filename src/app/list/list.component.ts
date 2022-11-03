import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    product: string = 'מוצר לדוגמה';

    myList: string[] = [
        'מלפפון',
        'עגבניה',
        'כוסברה',
    ];

    addProduct() {
        this.myList.push(this.product);
        this.product = '';
    }

    constructor() { }

    ngOnInit() {
    }

}
