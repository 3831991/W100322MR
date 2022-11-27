import { Injectable } from '@angular/core';
import { UserLoggedin } from './app.component';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    user: UserLoggedin | undefined;
    
    isAlertActived: boolean;
    alertText: string;

    isLoader: boolean;

    loader(isStart: boolean) {
        this.isLoader = isStart;
        document.body.style.overflow = isStart ? 'hidden' : 'initial';
    }

    alert(txt: string) {
        this.alertText = txt;
        this.isAlertActived = true;
    }

    setGlobalStyling() {
        for (const key in localStorage) {
            const val = localStorage[key];

            if (key == 'level') {
                document.body.style.filter = `brightness(${val}%)`;
                document.body.style.backgroundColor = `hsl(0, 0%, ${val}%)`;
            } else if (key == 'fontSize') {
                document.body.style.fontSize = (1 + val / 50) + 'em';
            } else if (key == 'margin') {
                document.body.style.margin = `0 ${val}rem`;
            } else if (key == 'letterSpacing') {
                document.body.style.letterSpacing = val + 'px';
            } else if (key == 'invert') {
                document.body.style.filter = `invert(${val}%)`;
            }
        }
    }

    sum(numbers: number[]) {
        return numbers.reduce((num, res) => res += num, 0);
    }

    reflaction<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    constructor() {
    }
}
