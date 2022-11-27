import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    current = 0;

    images: string[] = [
        "assets/images/img (15).jpg",
        "assets/images/img (18).jpg",
        "assets/images/img (19).jpg",
        "assets/images/img (20).jpg",
        "assets/images/IMG_2266.jpg",
    ];

    next() {
        this.current++;

        if (this.current == this.images.length) {
            this.current = 0;
        }
    }

    prev() {
        this.current--;

        if (this.current < 0) {
            this.current = this.images.length - 1;
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
