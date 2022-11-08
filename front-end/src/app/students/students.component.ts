import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
    student: string;

    students: string[] = [
        "יעקב",
        "שוקי",
        "משה",
        "פוקי",
        "מאוד קל",
    ];

    addStudent() {
        this.students.push(this.student);
        this.student = "";
    }

    removeStudent(i: number) {
        this.students.splice(i, 1);
    }

    constructor() { }

    ngOnInit() {
    }

}
